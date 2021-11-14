const express = require('express');
const app = express();
const port = 1000;

app.use('/slug', express.static('.'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
