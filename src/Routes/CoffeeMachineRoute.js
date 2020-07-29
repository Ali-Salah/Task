const express = require('express');
const bodyParser = require('body-parser');

const router = new express.Router();
const CoffeMachineController = require('../Controllers/CoffeMachineController');

router.use(bodyParser.json());

router.get('/filter', CoffeMachineController.filter);

module.exports = router;
