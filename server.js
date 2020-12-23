const express = require('express');

// Constants


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

