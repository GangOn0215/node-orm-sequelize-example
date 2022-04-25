const db = require("../database/models");
const User = db.User;

exports.create = (req, res) => {
  //validate request
  console.log(req.body);
  if (!req.body.id) {
    res.status(404).send({
      messgae: "id can not be empty!",
    });

    return;
  }

  const user = {
    id: req.body.id,
    password: req.body.password,
    email: req.body.email,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};


exports.findAll = (req, res) => {
  User.findAll().then((data) => res.send(data));
}