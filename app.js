var express = require("express"),
  app = express(),
  http = require ("http"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");
  server = http.createServer(app),
  mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get("/", function (req, res) {
  res.send("Hola Hoy Sale !");
});

app.use(router);

mongoose.connect("mongodb://localhost:27017/Directorio", function (err, res) {
  if (err) {
    console.log("ERROR: connecting to Database. " + err);
  }

  app.listen(27017, function () {
    console.log("Node server running on http://localhost:27017");
  });
});