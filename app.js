const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const db = require ('./app/models/');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => {
    console.log(`Database Connected!`);
  })
  .catch((err) => {
    console.log(`Cannot Connect to the Database!`, err);
    process.exit();
  });

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to our App"
  });
});

require('./app/routes/post.routes')(app);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`) ;
});