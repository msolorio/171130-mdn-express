const express = require('express');
const app = express();
const logger = require('morgan');
const wiki = require('./wiki');

// sets up morgan logging for all requests to app
app.use(logger('dev'));

// route requests to /wiki to wiki router
app.use('/wiki', wiki);

// when a request for static assets is made to the root serve public
app.use(express.static('public'));

// when a request for static assets is made to /wiki serve public
app.use('/wiki', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.listen(3000, () => {
  console.log('your express app is running on port 3000');
});
