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
  const updateFields = req.body;

  try {
    const updatedData = await Data.findOneAndUpdate(
      { _id: _id },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    return res.status(200).json({ data: updatedData });
  } catch (error) {
    console.error("Error updating data:", error.message);
    return res
      .status(500)
      .json({ message: "Error updating data", error: error.message });
  }
};

module.exports = { createData, getAllData, updateData };
