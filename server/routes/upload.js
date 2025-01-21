const express = require('express');
const { extractTextFromFile } = require('../utils/ocr');
const router = express.Router();

router.post('/', async (req, res) => {
  if (!req.files || !req.files.document) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const file = req.files.document;

  try {
    const text = await extractTextFromFile(file);
    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process the document' });
  }
});

module.exports = router;
