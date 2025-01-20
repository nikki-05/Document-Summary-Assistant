import React, { useState } from 'react';
import axios from 'axios';
import './FileUploader.css';

const FileUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [summary, setSummary] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check file size (50MB = 50 * 1024 * 1024 bytes)
            if (file.size > 50 * 1024 * 1024) {
                setErrorMessage('File size exceeds 50 MB. Please upload a smaller file.');
                setSelectedFile(null); // Reset file
            } else {
                setErrorMessage('');
                setSelectedFile(file);
            }
        }
    };

    const handleSummarize = async () => {
        if (!selectedFile) {
            setErrorMessage('Please upload a file to summarize.');
            return;
        }
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('/api/upload', formData);
            setSummary(response.data.summary);
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred while summarizing the file.');
        }
    };

    const handleDownload = () => {
        const element = document.createElement('a');
        const file = new Blob([summary.join('\n')], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'summary.txt';
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div className="file-uploader-container">
            <h2>Your personal Assistant</h2>
            <div className="file-upload-section">
                <input type="file" onChange={handleFileChange} />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="summarize-button" onClick={handleSummarize} disabled={!selectedFile}>
                    Summarize File
                </button>
            </div>
            {summary && (
                <div className="summary-section">
                    <h3>Summary</h3>
                    <ul className="summary-list">
                        {summary.map((point, index) => (
                            <li key={index} className="summary-item">{point}</li>
                        ))}
                    </ul>
                    <button className="download-button" onClick={handleDownload}>
                        Download Summary
                    </button>
                </div>
            )}
        </div>
    );
};

export default FileUploader;
