const express = require('express');
const router = express.Router();
const urlShortController = require("../controllers/url.controler")

router.post('/url', urlShortController);

module.exports = router;