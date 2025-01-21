# Document-Summary-Assistant

## Project Overview
The Document Summary Assistant is a web application designed to help users extract and summarize text from PDF and image documents. Users can upload their files, and the application processes them using text extraction and summarization techniques, presenting the summary in a user-friendly interface.

## Features
- **Document Upload**: Supports PDF and image files via a drag-and-drop or file picker interface.
- **Text Extraction**:
  - Extracts text from PDFs while maintaining formatting.
  - Utilizes Optical Character Recognition (OCR) for text extraction from image files.
- **Summary Generation**:
  - Provides smart summaries of extracted text in bullet point format.
  - Allows easy readability by highlighting key points.
- **Responsive Design**: Mobile-friendly interface for seamless use across devices.
- **Error Handling**: Alerts users to missing files or processing errors.

## Technologies Used
- **Frontend**:
  - React.js for a responsive and dynamic user interface.
  - CSS for styling the application.
- **Backend**:
  - Node.js with Express.js for API and server management.
  - Tesseract.js for OCR functionality.
  - pdf-parse for extracting text from PDF documents.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your system.

### Steps
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory and install dependencies:
   ```
   cd document-summary-app/backend
   npm install
   ```
3. Start the backend server:
   ```
   node index.js
   ```
  -> npm install express cors express-fileupload tesseract.js pdf-parse

4. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```
   ->npm install axios

5. Start the frontend application:
   ```
   npm start
   ```
6. Access the application in your browser at `http://localhost:3000`.

## File Structure
```
document-summary-app/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── upload.js
│   └── utils/
│       └── ocr.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── FileUpload.js
│   │   ├── App.js
│   │   └── index.js
│   └── public/
│       └── index.html
```

## Future Enhancements
- Support for more file formats (e.g., Word documents).
- Advanced summarization options using machine learning models.
- User authentication is used to save and manage uploaded documents.

Feel free to raise an issue or submit a pull request for any queries or contributions!


