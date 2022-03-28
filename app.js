const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const req = require("express/lib/request");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const mongoURL =
  "mongodb+srv://admin:admin@snapshareusers.xd7ya.mongodb.net/usersDatabase?retryWrites=true&w=majority";

mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Failed", err));

const signupUser = require("./api/controller/signupUser");
app.use("/add-user", signupUser);

const getAllUsers = require("./api/controller/getUserDetails");
app.use("/get-all-users", getAllUsers);

const authenticateUser = require("./api/controller/authenticate");
app.use("/authenticate", authenticateUser);

app.use("/", (req, res) => {
  return res.status(404).json({ message: "Route not found", success: false });
});

module.exports = app;
