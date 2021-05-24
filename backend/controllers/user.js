<<<<<<< HEAD
// Import variable from models
let User = require("../models/user");
// Variable to encrypt passwords
let bcrypt = require("bcrypt-nodejs");
// Import JWT
let jwt = require("../libs/jwt");

// Function to register a new user
const registerUser = (req, res) => {
  // Import JSON data
  let params = req.body;
  // Create a clean user model
  let user = new User();
  if (
    params.names &&
    params.lastName &&
=======
let User = require("../models/user");
let bcrypt = require("bcrypt-nodejs");
let jwt = require("../libs/jwt");

const registerUser = (req, res) => {
  let params = req.body;
  let user = new User();
  if (
    params.name &&
    params.lastname &&
>>>>>>> d52bf861fb467fce027cb030dfe4e965da849e48
    params.email &&
    params.pass &&
    params.role &&
    params.address &&
<<<<<<< HEAD
    params.phoneNumber &&
    params.registerDate
  ) {
    bcrypt.hash(params.pass, null, null, function (err, hash) {
      // If it encrypts, hash works
      if (hash) {
        user.names = params.names;
        user.lastName = params.lastName;
=======
    params.phoneNumber
  ) {
    bcrypt.hash(params.pass, null, null, (err, hash) => {
      if (hash) {
        user.name = params.name;
        user.lastname = params.lastname;
>>>>>>> d52bf861fb467fce027cb030dfe4e965da849e48
        user.email = params.email;
        user.pass = hash;
        user.role = params.role;
        user.address = params.address;
        user.phoneNumber = params.phoneNumber;
<<<<<<< HEAD
        user.registerDate = params.registerDate
        // Register with MongoDB
        user.save((err, saveUser) => {
          if (err) {
            res.status(500).send({ err: "The User was not registered" });
=======
        usuario.save((err, saveUser) => {
          if (err) {
            res.status(500).send({ err: "No se registro Usuario" });
>>>>>>> d52bf861fb467fce027cb030dfe4e965da849e48
          } else {
            res.status(200).send({ user: saveUser });
          }
        });
      } else {
<<<<<<< HEAD
        // Provide response if encryption fails
        res
          .status(400)
          .send({ err: "Could not encrypt password, cannot register User" });
      }
    });
  } else {
    // Validate incoming JSON data
    res.status(405).send({ err: "Fields are incomplete" });
  }
};

// Login Function
const login = (req, res) => {
  let params = req.body;
  // Search for user in DB
  User.findOne({ names: params.names }, (err, userData) => {
    if (err) {
      res.status(500).send({ message: "Server Error" });
    } else {
      if (userData) {
        bcrypt.compare(params.pass, userData.pass, function (err, confirm) {
          if (confirm) {
            if (params.getToken) {
              res.status(200).send({ jwt: jwt.createToken(userData) });
            } else {
              res.status(200).send({ User: userData, message: "No Token!" });
            }
          } else {
            res.status(401).send({ message: "Name or Password Incorrect" });
          }
        });
      } else {
        res.status(401).send({ message: "Name or Password Incorrect" });
=======
        res.status(405).send({ err: "no se guardo un dato" });
      }
    });
  }
};

const login = (req, res) => {
  let params = req.body;
  User.findOne({ email: params.email }, (err, dataUser) => {
    if (err) {
      res.status(500).send({ mensaje: "Error del Servidor" });
    } else {
      if (dataUser) {
        bcrypt.compare(params.pass, dataUser.pass, (err, confirm) => {
          if (confirm) {
            if (params.getToken) {
              res.status(200).send({ jwt: jwt.createToken(dataUser) });
            } else {
              res.status(200).send({ usuario: dataUser, mensaje: "sin token" });
            }
          } else {
            res.status(401).send({ mensaje: "Correo o pass incorrectos" });
          }
        });
      } else {
        res.status(401).send({ mensaje: "Correo o pass incorrectos" });
>>>>>>> d52bf861fb467fce027cb030dfe4e965da849e48
      }
    }
  });
};
<<<<<<< HEAD
// Export the module
=======

>>>>>>> d52bf861fb467fce027cb030dfe4e965da849e48
module.exports = {
  registerUser,
  login,
};
