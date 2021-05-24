<<<<<<< HEAD
 // Import express
let express = require("express");
// Import Controller for User
let User = require("../controllers/user");

// Create the API
let api = express.Router();

// Post service to register
api.post("/user/registerUser", User.registerUser);
// Post service to Login
api.post("/login", User.login);

// Export the module
module.exports = api;
=======
let express = require("express");
let User = require("../controllers/user");

let api = express.Router();

api.post("/registrarUsuario", User.registerUser);
api.post("/login", User.login);

module.exports = api;
>>>>>>> d52bf861fb467fce027cb030dfe4e965da849e48
