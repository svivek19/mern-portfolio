const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  company: {
    name: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  project: [
    {
      title: {
        type: String,
      },
      techStack: [{ type: String }],
      link: { type: String },
    },
  ],
  experience: [
    {
      title: { type: String },
      location: { type: String },
      companyName: { type: String },
      status: { type: String, enum: ["present", "completed"] },
      duration: { type: String },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
