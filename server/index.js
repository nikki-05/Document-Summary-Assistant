const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const uploadRoute = require('./routes/upload');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Routes
app.use('/api/upload', uploadRoute);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
