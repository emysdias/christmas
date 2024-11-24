const express = require('express');
const router = express.Router();
const { addPlayerTime, getRanking } = require('../controllers/ranking');

router.post('/ranking', addPlayerTime);
router.get('/ranking', getRanking);

module.exports = router;
