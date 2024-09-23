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

// Get all data
const getAllData = async (req, res) => {
  try {
    const data = await Data.find();
    return res.status(200).json({ data });
  } catch (error) {
    return res
      .statustatus(500)
      .json({ message: "Error fetching data", error: error.message });
  }
};

// Update data by _id
const updateData = async (req, res) => {
  const { _id } = req.params;
  const updateData = req.body;
  try {
    const response = await Data.findByIdAndUpdate(
      _id,
      { $set: updateData },
      { new: true }
    );
    return response.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating data", error: error.message });
  }
};

module.exports = { createData, getAllData, updateData };
