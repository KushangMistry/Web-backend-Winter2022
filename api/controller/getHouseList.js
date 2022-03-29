const express = require("express");
const mongoose = require("mongoose");
const houses = require("../model/houseModel");

const router = express.Router();

router.get("", async (req, res) => {
  await houses
    .find()
    .exec()
    .then((result) => {
      if (houses || houses.length) {
        return res.status(200).json({
          message: "Success",
          success: true,
          houses: result,
        });
      }
    })
    .catch((err) => {
      console.log((err) => {
        return res
          .status(500)
          .json({ message: "Internal Server Erorr", success: false });
      });
    });
});

module.exports = router;
