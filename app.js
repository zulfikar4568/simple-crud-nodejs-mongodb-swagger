const express = require('express');
const cors = require('cors');
const swaggerUI  = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

var cssOptions = {
  customCss: `
  .topbar-wrapper img {content:url(https://upload.wikimedia.org/wikipedia/commons/4/41/Akron_Z_logo_2015.png); width:75px; height:auto;}
  .swagger-ui .topbar { background-color: #000000;}`,
  customSiteTitle: "Post API"
};

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API Post by Zulfikar",
      version: "1.0.0",
      description: "Post Restfull API"
    },
    servers: [
      {
        url: "http://localhost:8000"
      }
    ]
  },
  apis: ['./app/routes/*.js']
}

const specs = swaggerJsDoc(options);

const db = require ('./app/models/');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
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


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs, cssOptions));
require('./app/routes/post.routes')(app);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`) ;
});