let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let port = process.env.PORT || 3001;

let app = express();

let User = require("./routes/user");

mongoose.connect(
  "mongodb://localhost:27017/almacenonly",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Servidor DB: ON");
      app.listen(port, function () {
        console.log("Servidor Backend Funcionando");
      });
    }
  }
);

app.use((req, res, next) => {
  console.log(req);
  res.header("Content-Type: application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", User);

module.exports = app;
