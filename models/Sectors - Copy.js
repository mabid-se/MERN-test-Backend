const mongoose = require("mongoose");

const sectorsSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subcatOne: [String],
  subcatTwo: [String],
  subcatThree: [String],
});

const Sector = mongoose.model("Sector", sectorsSchema);

module.exports = Sector;
