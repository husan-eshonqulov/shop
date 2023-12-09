const express = require('express');

const authContoller = require('../controllers/auth');

const router = express.Router();

router.get('/login', authContoller.getLogin);

module.exports = router;
