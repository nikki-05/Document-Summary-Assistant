const express = require('express');
const { summarizeDocument } = require('../controllers/summarizerController');
const router = express.Router();

router.post('/', summarizeDocument);

module.exports = router;
