const express = require('express');
const app = express();
const logger = require('morgan');
const wiki = require('./wiki');

// sets up morgan logging for all requests to app
app.use(logger('dev'));

// route requests to /wiki to wiki router
app.use('/wiki', wiki);


app.get('/', (req, res) => {
  res.send('hello expresso');
});

app.listen(3000, () => {
  console.log('your express app is running on port 3000');
});
