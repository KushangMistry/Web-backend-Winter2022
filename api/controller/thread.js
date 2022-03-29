const express = require("express");
const mongoose = require("mongoose");
const thread = require("../model/threadSchema");
// const { validate } = require("../model/usersModel");
// const generateToken = require("../model/generateToken");

const router = express.Router();

router.post("/addthread", async (req, res) => {
  try {
    const addThread = new thread(req.body);
    console.log("data", addThread);
    const insertThread = await addThread.save();
    res.send(insertThread);
  } catch (error) {
    console.log("4$", error);
    return res.status(400).send(error);
  }
});

router.get("/getthread", async (req, res) => {
  try {
    const getthread = await thread.find({});
    res.send(getthread);
  } catch (error) {
    console.log("4$", error);
    return res.status(400).send(error);
  }
});

module.exports = router;
