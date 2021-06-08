const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to our App"
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`) ;
});