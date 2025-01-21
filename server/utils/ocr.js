const Tesseract = require('tesseract.js');
const pdfParse = require('pdf-parse');

async function extractTextFromFile(file) {
  if (file.mimetype === 'application/pdf') {
    const text = await pdfParse(file.data);
    return text.text;
  } else {
    const { data: { text } } = await Tesseract.recognize(file.data, 'eng');
    return text;
  }
}

module.exports = { extractTextFromFile };
