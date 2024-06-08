const City = require("../models/cities.model");
const Station = require("../models/station.model");
const { z } = require("zod");

const getCities = async (req, res) => {
  try {
    const cities = await City.find();
    console.log(cities);
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const addCity = async (req, res) => {
  const { name } = req.body;
  const city = new City({ name });

  try {
    await city.save();
    res.status(201).json(city);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getStation = async (req, res) => {
  try {
    const city = req.query.city; // Use req.query to get the city parameter from the URL query string

    let filter = {};

    // If city is provided, find the city document and use its _id
    if (city) {
      const cityDocument = await City.findOne({ name: city });
      console.log(cityDocument);
      if (!cityDocument) {
        // If city not found, return empty array
        return res.status(404).json([]);
      }
      filter = { cityId: cityDocument._id };
    }

    // Find stations based on the filter and populate the city information
    const stations = await Station.find(filter).populate('cityId');
    // const stationData = stations.map((station) => station.stationName);

    res.status(200).json(stations);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


const addStation = async (req, res) => {
  const { stationName, city, seats } = req.body;

  try {
    // Find the city document based on the city name received from the frontend
    const cityDocument = await City.findOne({ name: city });

    if (!cityDocument) {
      // If city is not found, return an error
      return res.status(404).json({ error: 'City not found' });
    }

    // Create a new station document with a reference to the city document
    const station = new Station({ stationName, cityId: cityDocument._id, seats });

    // Save the station document
    await station.save();

    // Return the saved station document in the response
    res.status(201).json(station);
  } catch (err) {
    // If an error occurs during saving, return an error response
    res.status(400).send(err.message);
  }
};

const getSeats = async (req, res) => {
  try {
    const station = req.query.station; // Use req.query to get the station parameter from the URL query string


    // If station is provided, find the station document and use its _id
    if (station) {
      const stationDocument = await Station.find({ stationName: station });
      console.log(stationDocument[0].seats);
      res.status(200).json(stationDocument[0].seats);
      if (!stationDocument) {
        // If station not found, return empty array
        return res.status(404).json([]);
      }
    }

    // Find stations based on the filter and populate the city information
    // const stationData = stations.map((station) => station.stationName);

    // res.status(200).json(seats);
  } catch (err) {
    res.status(500).send(err.message);
  }
}


module.exports = {
  getCities,
  addCity,
  getStation,
  addStation,
  getSeats
};
