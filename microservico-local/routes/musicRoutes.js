const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.get('/', musicController.homePage);

router.get('/music/:trackOrArtist', musicController.searchMusic);

module.exports = router;
