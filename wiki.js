const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/wiki-home.html`);
});

router.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/views/wiki-about.html`);
});

module.exports = router;
