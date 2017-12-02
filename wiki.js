const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('wiki homepage');
});

router.get('/about', (req, res) => {
  res.send('about wiki page');
});

module.exports = router;
