const multer = require('multer');
const path = require('path');
const summarizer = require('../utils/summarizer');
const fs = require('fs');
const { extractTextFromPDF, extractTextFromImage } = require('../utils/textExtractor'); // Assuming you have separate functions for extraction

// Set up multer storage
const upload = multer({
    limits: { fileSize: 50 * 1024 * 1024 }, // Limit to 50 MB
    fileFilter: (req, file, cb) => {
        const filetypes = /pdf|jpg|jpeg|png/; // Allowed file types
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = /pdf|image\//.test(file.mimetype); // Check MIME type

        if (extname && mimeType) {
            return cb(null, true);
        }
        cb(new Error('Invalid file type. Only PDF and image files are allowed.'));
    }
}).single('file');

exports.uploadFile = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        try {
            let extractedText = '';
            
            // Extract text based on file type
            if (path.extname(req.file.originalname).toLowerCase() === '.pdf') {
                extractedText = await extractTextFromPDF(req.file.path); // Extract text from PDF
            } else if (['.jpg', '.jpeg', '.png'].includes(path.extname(req.file.originalname).toLowerCase())) {
                extractedText = await extractTextFromImage(req.file.path); // Extract text from Image (OCR)
            }

            // Pass the extracted text to the summarizer
            const summary = summarizer(extractedText);

            // Delete the uploaded file after processing to save storage space
            fs.unlinkSync(req.file.path);

            res.status(200).json({ summary });
        } catch (error) {
            res.status(500).json({ error: 'Error summarizing the document.' });
        }
    });
};
