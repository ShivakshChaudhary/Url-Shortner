const urlModel = require("../models/url.model.js");

async function getUrl(req, res) {
  const code = req.params.code;
  url = await urlModel.findOne({
    shortCode: code,
  });
  if (!url) {
    return res.status(404).json({
      error: "Short code not Found!",
    });
  }
  res.redirect(url.url);
}

module.exports = getUrl;
