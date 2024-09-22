const Data = require("../model/data.model");

// Create a new data
const createData = async (req, res) => {
  console.log(req.body);
  try {
    const newData = await Data.create(req.body);
    return res
      .status(201)
      .json({ message: "Data created successfully", data: newData });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating data", error: error.message });
  }
};

module.exports = { createData };
