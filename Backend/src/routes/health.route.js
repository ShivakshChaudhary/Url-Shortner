const express = require('express');
const router = express.Router();
const healthController = require("../controllers/health.controler")

router.get('/ping', healthController);

module.exports = router;