const express = require("express");
const router = express.Router();
const {
  createData,
  getAllData,
  updateData,
} = require("../controller/data.controller");

// get data
router.get("/", getAllData);

// post data
router.post("/addEdit", createData);

// update data
router.put("/update/:_id", updateData);

module.exports = router;
