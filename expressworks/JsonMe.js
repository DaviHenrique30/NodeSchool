const express = require('express');
const fs = require('fs');

const app = express();

app.get('/books', (req, res) => {
  const filename = process.argv[3];
  fs.readFile(filename, (err, data) => {
    if (err) {
      return res.sendStatus(500);
    }
    try {
      const books = JSON.parse(data);
      res.json(books);
    } catch (err) {
      res.sendStatus(500);
    }
  });
});

const port = process.argv[2];
app.listen(port, () => console.log(`Server listening on port ${port}`));
