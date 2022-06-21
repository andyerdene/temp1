const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);
// module.exports = mongoose.model("users", loginTemplate);
exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    var passwordIsValid = req.body.password === user.password;
    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }
    // var token = jwt.sign({ id: user.id }, config.secret, {
    //   expiresIn: 86400, // 24 hours
    // });
    // var authorities = [];
    // for (let i = 0; i < user.roles.length; i++) {
    //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
    // }
    // req.session.token = token;
    res.status(200).send({
      // id: user._id,
      username: user.username,
      email: user.email,
      success: true,
      // roles: authorities,
    });
  });
};
