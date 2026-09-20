const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url: String,
    shortCode: String
})

const urlModel = mongoose.model("url", urlSchema);

module.exports = urlModel;