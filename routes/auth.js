const express = require('express');

const authContoller = require('../controllers/auth');

const router = express.Router();

router.get('/signup', authContoller.getSignup);

router.post('/signup', authContoller.postSignup);

router.get('/login', authContoller.getLogin);

router.post('/login', authContoller.postLogin);

router.post('/logout', authContoller.postLogout);

module.exports = router;
