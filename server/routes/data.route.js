const express = require("express");
const router = express.Router();
const { createData } = require("../controller/data.controller");

// post data
router.post("/addEdit", createData);

module.exports = router;
