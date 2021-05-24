let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

<<<<<<< HEAD
// Connection to port
let port = process.env.PORT || 3001;
// App variable
let app = express();

// Routes
let User = require("./routes/user");
let Product = require("./routes/product");

// Database connection
mongoose.connect(
  "mongodb://localhost:27017/AlmacenesOnly",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log("Database Server: ON");
      app.listen(port, function () {
        console.log("Backend server Running on Port: " + port);
=======
let port = process.env.PORT || 3001;

let app = express();

let userRoutes = require("./routes/user");

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
>>>>>>> d52bf861fb467fce027cb030dfe4e965da849e48
      });
    }
  }
);

<<<<<<< HEAD
// Analyze the URL's
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
// Routes API's
app.use("/api", User);
app.user("./api", Product);

// Export module
=======
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", userRoutes);

>>>>>>> d52bf861fb467fce027cb030dfe4e965da849e48
module.exports = app;
