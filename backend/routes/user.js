let express = require("express");
let User = require("../controllers/user");

let api = express.Router();

api.post("/registrarUsuario", User.registerUser);
api.post("/login", User.login);

module.exports = api;