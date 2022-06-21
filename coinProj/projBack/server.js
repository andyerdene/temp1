const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
const controller = require("./models/LoginModals");

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("database connected")
);

// app.post("/login", (req, res) => {
//   let username = req.body.username;
//   let password = req.body.password;
//   res.send(`Username: ${username} Password: ${password}`);
// });
app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(4000, () => console.log("server is running"));

// app.get("/api/login", controller.signin);
