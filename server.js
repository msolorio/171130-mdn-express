const express = require('express');
const app = express();

const area = require('./square').area;
const perimeter = require('./square').perimeter;

console.log('area(5):', area(5));
console.log('perimeter(5):', perimeter(5));

app.get('/', (req, res) => {
  res.send('hello expresso');
});

app.listen(3000, () => {
  console.log('your express app is running on port 3000');
});
