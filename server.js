// load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// import dependencies
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
// const Person = require("./models/Person");
const personController = require("./controllers/personController");
const sectorController = require("./controllers/sectorController");

// create an express app
const app = express();

// configure express
app.use(express.json());
app.use(cors());

// connect to databse
connectToDb();

// routing
app.post("/persons", personController.addPerson);
app.get("/persons", personController.fetchPersons);
app.get("/persons/:id", personController.fetchPerson);
app.put("/persons/:id", personController.updatePerson);
app.delete("/persons/:id", personController.deletePerson);

app.post("/sectors", sectorController.createSector);
app.get("/sectors", sectorController.getAllSectors);
// app.put("/sectors/:id", sectorController.updateSector);
// app.delete("/sectors/:id", sectorController.deleteSector);

// start the server
app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}!`)
);
