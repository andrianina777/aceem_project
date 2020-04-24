const express = require('express');
const path = require("path");
const fs = require('fs');
const router = express.Router();
const urlConfig = require('../config/url');

router.get("/content", function(req, res) {
  res.sendFile(path.resolve('src/template/content.html'));
});


module.exports = router;