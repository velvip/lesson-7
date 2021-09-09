'use strict';

const express = require('express');

// константы
const port = 8080;
const host = '0.0.0.0';

// приложение
const app = express();
app.get('/', (req, res) => {
  res.send('Test 09.09.2021');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);
