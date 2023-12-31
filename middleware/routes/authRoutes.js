const express = require('express');
const router = express.Router();

const AuthCtrl = require('../controllers/auth');

router.post('/create-user', AuthCtrl.RegisterUser);
router.post('/login', AuthCtrl.LoginUser);

module.exports = router;