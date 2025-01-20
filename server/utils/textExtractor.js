const pdfParse = require('pdf-parse');
const Tesseract = require('tesseract.js');
const fs = require('fs');

exports.extractText = async (filePath, mimeType) => {
    if (mimeType === 'application/pdf') {
        const buffer = fs.readFileSync(filePath);
        const data = await pdfParse(buffer);
        return data.text;
    } else if (mimeType.startsWith('image/')) {
        const { data: { text } } = await Tesseract.recognize(filePath, 'eng');
        return text;
    } else {
        throw new Error('Unsupported file type');
    }
};
