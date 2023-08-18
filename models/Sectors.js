const mongoose = require("mongoose");

// const sectorsSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   subSectors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sector" }],
// });
const sectorsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subSectors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sector" }],
});

const Sector = mongoose.model("Sector", sectorsSchema);

module.exports = Sector;
