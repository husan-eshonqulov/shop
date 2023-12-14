const express = require('express');

const authContoller = require('../controllers/auth');

const router = express.Router();

router.get('/login', authContoller.getLogin);

router.post('/login', authContoller.postLogin);

router.post('/logout', authContoller.postLogout);

module.exports = router;
