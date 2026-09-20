const urlModel = require('../models/url.model.js');
const { nanoid } = require("nanoid/non-secure");

async function urlShort(req, res) {
    const shortCode = nanoid();

    await urlModel.create({
        url: req.body.url,
        shortCode: shortCode
    })
    res.status(201).json({
        url: req.body.url,
        shortCode: shortCode
    });
}

module.exports = urlShort;