const express = require('express');
const router = express.Router();
var path = require('path');
const urlConfig = require('../config/url');

router.get("/", function(req, res) {
  res.sendFile(path.resolve("src/login/login.template.html"));
});

module.exports = router;