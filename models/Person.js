const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  sectors: [String],
  terms: Boolean,
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
