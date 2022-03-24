const express = require('express');
const router = express.Router();
const usernameController = require('../controllers/exam');
router.get('/', usernameController.getusername);
router.post('/', usernameController.createusername);
module.exports = router;
