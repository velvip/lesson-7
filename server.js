'use strict';

const express = require('express');

// константы
const port = 8080;
const host = '104.45.46.248';

// приложение
const app = express();
app.get('/', (req, res) => {
  res.send('TEST');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);
