const express = require('express');
const app = express();
const wiki = require('./wiki');

app.get('/', (req, res) => {
  res.send('hello expresso');
});

// route requests to /wiki to wiki router
app.use('/wiki', wiki);

app.listen(3000, () => {
  console.log('your express app is running on port 3000');
});
