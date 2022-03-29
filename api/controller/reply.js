const express = require("express");
const mongoose = require("mongoose");
const reply = require("../model/replySchema");
// const { validate } = require("../model/usersModel");
// const generateToken = require("../model/generateToken");

const router = express.Router();

router.post("/addreply", async (req, res) => {
  try {
    const addreply = new thread(req.body);
    console.log("data", addreply);
    const insertreply = await addreply.save();
    res.send(insertreply);
  } catch (error) {
    console.log("4$", error);
    return res.status(400).send(error);
  }
});

router.get("/getreply", async (req, res) => {
  try {
    const getreply = await reply.find({});
    res.send(getreply);
  } catch (error) {
    console.log("4$", error);
    return res.status(400).send(error);
  }
});

module.exports = router;
