// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let urls = {}; // 用于存储短链接和原始链接的映射

app.post('/shorten', (req, res) => {
  const originalUrl = req.body.url;
  const shortUrl = generateShortUrl();
  urls[shortUrl] = originalUrl;
  res.json({ shortUrl: `http://localhost:3000/${shortUrl}` });
});

app.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl;
  const originalUrl = urls[shortUrl];
  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).send('URL not found');
  }
});

function generateShortUrl() {
  return Math.random().toString(36).substr(2, 5);
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
