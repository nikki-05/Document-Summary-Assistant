import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please upload a file.');

    const formData = new FormData();
    formData.append('document', file);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSummary(response.data.text);
    } catch (error) {
      console.error(error);
      alert('Error uploading file.');
    }
  };

  return (
    <div className="file-upload-container">
      <h2>Upload Your Document</h2>
      <input type="file" onChange={handleFileChange} className="file-input" />
      <button className="upload-button" onClick={handleUpload}>
        Upload
      </button>
      <textarea className="summary-area" value={summary} readOnly placeholder="Summary will appear here..." />
    </div>
  );
};

export default FileUpload;
