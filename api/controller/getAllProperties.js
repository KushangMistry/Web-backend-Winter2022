/**
 * @author Kushang Arunbhai Mistry (B00870521)
 * To fetch details of all properties
 */

const express = require("express");
const mongoose = require("mongoose");
const property = require("../model/propertyModel");

const router = express.Router();

router.post("", async (req, res) => {
  await property
    .find({ _id: { $in: req.body.idList } })
    .exec()
    .then((result) => {
      if (property || property.length) {
        return res.status(200).json({
          message: "Success",
          success: true,
          propertyDetails: result,
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
