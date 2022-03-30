const express = require("express");

const router = express.Router();

const house = require("../controller/housecontroller.js");

const multer = require('multer')
// 2
const upload = multer({ dest: 'images/' })

const fs = require("fs");

// Create a new Tutorial
router.post("/", house.create);
// Retrieve all Tutorials
router.get("/", house.findAll);
// Retrieve all published Tutorials
router.get("/published", house.findAllPublished);
// Retrieve a single Tutorial with id
router.get("/:id", house.findOne);
// Update a Tutorial with id
router.put("/:id", house.update);
// Delete a Tutorial with id
router.delete("/:id", house.delete);
// Create a new Tutorial
router.delete("/", house.deleteAll);

router.post('/images', upload.single('image'), (req, res) => {
  // 4
  const imagePath = req.file.path
console.log(imagePath);
  // Save this data to a database probably

  res.send(imagePath)
})

router.get('/images/:imageName', (req, res) => {
  // do a bunch of if statements to make sure the user is 
  // authorized to view this image, then

  console.log("hello");
  const imageName = req.params.imageName;
  // console.log(JSON.stringify(req.params.imageName));
  var some = "images/"+imageName;
  const readStream = fs.createReadStream(some)
  console.log(res);
  var some = readStream.pipe(res)
  // console.log(some);
  // res.send(readStream);
})

module.exports = router;