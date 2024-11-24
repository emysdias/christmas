const express = require('express');
const router = express.Router();
const { addUser, findUser } = require('../controllers/user');

router.get('/users/:id', findUser);
router.post('/user', addUser);

module.exports = router;
