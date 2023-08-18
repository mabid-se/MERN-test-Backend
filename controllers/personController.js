const Person = require("../models/Person");

// adding new person to db
const addPerson = async (req, res) => {
  // get the sent in data off request body
  const { name, sectors, terms } = req.body;

  // create a note with it
  const person = await Person.create({ name, sectors, terms });

  // respond with the new person
  res.json({ person });
};

// getting all persons from db
const fetchPersons = async (req, res) => {
  // find the persons
  const persons = await Person.find();
  // respond with them
  res.json({ persons });
};

// getting a specific person from db
const fetchPerson = async (req, res) => {
  // get id off the url
  const personId = req.params.id;

  // find the note using that id
  const person = await Person.findById(personId);

  // respond with that
  res.json({ person });
};

// updating a specific person from db
const updatePerson = async (req, res) => {
  // get the id off the url
  const personId = req.params.id;

  // get the data pff request body
  const { name, sectors, terms } = req.body;

  // find and update the record
  await Person.findByIdAndUpdate(personId, { name, sectors, terms });

  // find the updated note
  const person = await Person.findById(personId);

  // respond with it
  res.json({ person });
};

// deleting a specific person from db
const deletePerson = async (req, res) => {
  // get id off url
  const personId = req.params.id;

  // delete the record
  await Person.findByIdAndDelete(personId);

  // respon with it
  res.json({ success: "person deleted" });
};

module.exports = {
  addPerson,
  fetchPersons,
  fetchPerson,
  updatePerson,
  deletePerson,
};
