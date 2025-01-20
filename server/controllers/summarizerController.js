const { extractText } = require('../utils/textExtractor');
const { generateSummary } = require('../utils/summarizer');
const fs = require('fs');

exports.summarizeDocument = async (req, res) => {
    try {
        const filePath = req.file.path;
        const text = await extractText(filePath, req.file.mimetype);
        const summary = generateSummary(text);
        fs.unlinkSync(filePath); // Remove the uploaded file
        res.status(200).json({ summary });
    } catch (error) {
        res.status(500).json({ error: 'Failed to process the document.' });
    }
};
