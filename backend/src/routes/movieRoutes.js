const express = require('express');
const { getRecommendations } = require('../controllers/movieController');

const router = express.Router();

router.get('/recommendations', getRecommendations);

module.exports = router;
