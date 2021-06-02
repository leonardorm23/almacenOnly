let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let port = process.env.PORT || 3001;

let app = express();

let Product = require("./routes/product");
let Category = require("./routes/category");
let User = require("./routes/user");

mongoose.connect(
  "mongodb://localhost:27017/almacenonly",
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true},
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


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
 
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




app.use("/api", User);
app.use("/api",Product);
app.use("/api",Category);

module.exports = app;






