const Sector = require("../models/Sectors");

// create new sectors to db
const createSector = async (req, res) => {
  try {
    const { name, subSectors } = req.body;
    const newSector = new Sector({ name, subSectors });
    await newSector.save();
    res.status(201).json(newSector);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// get all categories
// const getAllSectors = async (req, res) => {
//   try {
//     const sectors = await Sector.find().populate("subSectors");
//     res.status(200).json(sectors);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

const getAllSectors = async (req, res) => {
  const sectors = await Sector.find();
  res.json({ sectors });
  //   try {
  //     const sectors = await Category.find().populate("subSectors");
  //     res.status(200).json(sectors);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Server Error" });
  //   }
};

module.exports = { createSector, getAllSectors };
