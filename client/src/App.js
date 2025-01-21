import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

const App = () => (
  <div className="app-background">
    <h1 className="app-title">Document Summary Assistant</h1>
    <div className="app-container">
      <FileUpload />
    </div>
  </div>
);

export default App;