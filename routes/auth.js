const express = require('express');
const router = express.Router();

const install = require('../middleware/install');
const userCtrl = require('../controllers/user');

router.post('/login', install, userCtrl.login);

module.exports = router;