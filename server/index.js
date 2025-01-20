const express = require('express');
const multer = require('multer');
const cors = require('cors');
const summarizerRoutes = require('./routes/summarizerRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });
app.use('/api/summarize', upload.single('file'), summarizerRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
