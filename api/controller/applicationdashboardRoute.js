const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

var applications = require("../model/applicationinfo");

const body_parser = require("body-parser");
router.use(body_parser.json());

const nanoid = require("nanoid");

const applicationID = nanoid.customAlphabet(
  "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  8
);

router.get("/applications", (req, res) => {
  applications
    .find()
    .exec()
    .then((result) => {
      if (!applications || !applications.length) {
        return res
          .status(404)
          .json({ success: "false", applications: "Applications not found!!" });
      }
      return res
        .status(200)
        .json({
          message: "Users retrieved",
          success: "true",
          applications: result,
        })
        .catch((err) => {
          console.log((err) => {
            return res.status(500).json({ message: "Internal Server Error!!" });
          });
        });
    });
});

//post call for adding new applications users
router.post("/addapplications", (req, res) => {
  //console.log("Req : ", req.body);
  var email = req.body.formValues.email;
  var fullName = req.body.formValues.fullName;
  var currentaddress = req.body.formValues.currentaddress;
  var contactnumber = req.body.formValues.contactnumber;
  var postalcode = req.body.formValues.postalcode;
  var noofpeople = req.body.formValues.noofpeople;
  var date = req.body.formValues.date;

  console.log("Fullname: ", fullName);

  const applicationIdget = applicationID();
  //console.log(applicationIdget);

  const newApplication = new applications({
    _id: new mongoose.Types.ObjectId(),
    email,
    fullName,
    currentaddress,
    contactnumber,
    postalcode,
    noofpeople,
    date,
    status: "Applied",
    applicationID: applicationIdget.toString(),
  });

  newApplication
    .save()
    .then((result) => {
      console.log(result);
      return res.status(201).json({
        message: "Application created",
        success: true,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    });
});

// update
router.put("/updatestatus", (req, res) => {
  var applicationID = req.body.applicant.applicationID;

  applications
    .updateOne({ applicationID: applicationID }, req.body.applicant, {
      upsert: true,
    })
    .then((result) => {
      return res.status(201).json({
        message: "Application updated",
        success: true,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    });
});

//delete
router.post("/deleteApplication", (req, res) => {
  console.log("red:", req.body);
  var applicationID = req.body.app.applicationID;

  applications
    .deleteOne({ applicationID: applicationID })
    .then((result) => {
      return res.status(201).json({
        message: "Application deleted",
        success: true,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    });
});

module.exports = router;