var express = require('express');
var router = express.Router();
var hobbyController = require('../controllers/hobby');
router.get('/', hobbyController.gethobby);
router.post('/', hobbyController.createhobby);
router.delete('/:id', hobbyController.deletehobby);
module.exports = router;
