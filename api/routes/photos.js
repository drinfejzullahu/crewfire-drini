const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photos');

router.get('/photos', photosController.getPhotos);

module.exports = router;
