const express = require('express');
const bodyParser = require('body-parser');

const router = new express.Router();
const CoffePodController = require('../Controllers/CoffePodController');

router.use(bodyParser.json());

router.get('/filter', CoffePodController.filter);

module.exports = router;
