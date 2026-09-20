const express = require('express');
const router = express.Router();
const getUrlController = require("../controllers/get.controler")

router.get('/:code', getUrlController);

module.exports = router;