const express = require('express');
const { getUserProfile, uploadResume } = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get('/user/:id', authenticateToken, getUserProfile);

router.post('/uploadResume', authenticateToken, upload.single('resume'), uploadResume);

module.exports = router;
