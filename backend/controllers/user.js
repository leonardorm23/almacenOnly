let User = require("../models/user");
let bcrypt = require("bcrypt-nodejs");
let jwt = require("../libs/jwt");

const registerUser = (req, res) => {
  let params = req.body;
  let user = new User();
  if (
    params.name &&
    params.lastname &&
    params.email &&
    params.pass &&
    params.role &&
    params.address &&
    params.phoneNumber
  ) {
    bcrypt.hash(params.pass, null, null, (err, hash) => {
      if (hash) {
        user.name = params.name;
        user.lastname = params.lastname;
        user.email = params.email;
        user.pass = hash;
        user.role = params.role;
        user.address = params.address;
        user.phoneNumber = params.phoneNumber;
        usuario.save((err, saveUser) => {
          if (err) {
            res.status(500).send({ err: "No se registro Usuario" });
          } else {
            res.status(200).send({ user: saveUser });
          }
        });
      } else {
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
      }
    }
  });
};

module.exports = {
  registerUser,
  login,
};
