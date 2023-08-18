const Sector = require("../models/Sectors");

// adding new sectors to db
const addSector = async (req, res) => {
  // get the sent in data off request body
  const { category, subcatOne, subcatTwo, subcatThree } = req.body;

  //   creat e note with it
  const sector = await Sector.create({
    category,
    subcatOne,
    subcatTwo,
    subcatThree,
  });

  //   respond with the new person
  res.json({ sector });
};

// getting all sectors from db
const fetchSectors = async (req, res) => {
  // find the sectors
  const sectors = await Sector.find();

  // respond with them
  res.json({ sectors });
};

// updating a specific sector from db
const updateSector = async (req, res) => {
  // get the id off the url
  const sectorId = req.params.id;

  // get the data off request body
  const { category, subcatOne, subcatTwo, subcatThree } = req.body;

  // find and update the sector
  await Sector.findByIdAndUpdate(sectorId, {
    category,
    subcatOne,
    subcatTwo,
    subcatThree,
  });

  //   find the updated sector
  const sector = await Sector.findById(sectorId);

  //   respond with it
  res.json({ sector });
};

//  deleting a specific person from db
const deleteSector = async (req, res) => {
  // get id off the url
  const sectorId = req.params.id;

  // delete the sector
  await Sector.findByIdAndDelete(sectorId);

  //   respond with it
  res.json({ success: "sector deleted" });
};

module.exports = { addSector, fetchSectors, updateSector, deleteSector };
