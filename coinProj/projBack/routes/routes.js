const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModals");
const loginTemplateCopy = require("../models/LoginModals");
// const User = require("./models/user");
const controller = require("../models/LoginModals");
router.post("/signup", (request, response) => {
  const signUpUser = new signUpTemplateCopy({
    email: request.body.email,
    username: request.body.username,
    password: request.body.password,
  });
  signUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      response.json(err);
    });
});

// router.get("/login", (req, res) => {

//   res.sendFile(__dirname + "/static/login.html");
// });

router.post("/login", controller.signin);
module.exports = router;
