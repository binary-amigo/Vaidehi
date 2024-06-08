import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Routes } from "react-router-dom";
import "../../CSS/styles.css";
import { Route } from "react-router-dom";

export default function HomePage() {

  const [cities, setCities] = useState([]);
  const [stations, setStations] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStation, setSelectedStation] = useState("");

  useEffect(() => {
    // Fetch cities
    axios
      .get("http://localhost:3000/input/cities")
      .then((response) => {
        console.log(response.data);
        setCities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch stations for the selected city
    if (selectedCity) {
      console.log(selectedCity);
      axios
        .get(`http://localhost:3000/input/stations?city=${selectedCity}`)
        .then((response) => {
          setStations(response.data);
        })
        .catch((error) => {
          console.error("Error fetching stations:", error);
        });
    }
  }, [selectedCity]);

  

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedStation("");
  };

  const handleStationChange = (event) => {
    setSelectedStation(event.target.value);
  };

  return (
    <div className="bg-img1 h-screen">
      <nav className="navbar">
        <div className="menu">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5259/5259008.png"
            alt="menu"
            style={{ height: 20, paddingRight: 5 }}
          ></img>
          <span>Menu</span>
        </div>

        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/128/566/566983.png"
            alt="logo"
            style={{ height: 50, paddingRight: 10 }}
          ></img>
          <h1>Wait Here</h1>
        </div>

        <div>
            <Link to="/login" className="Login">Login</Link>
        </div>
      </nav>
      <section className="main">
        <div className="container">
          <h5>
            "Skip the queue, reserve your spot - book waiting seats at railway
            stations hassle-free!"
          </h5>
          <form name="form1" id="form1" action="/seats.html">
            <div className="inputs">
              <div>
                <span>City:</span>{" "}
                <select
                  name="city"
                  id="city"
                  onChange={(event) => {setSelectedCity(event.target.value)}}
                  value={selectedCity}
                >
                  <option value="">Select city</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <span>Station:</span>{" "}
                <select
                  name="station"
                  id="station"
                  onChange={(event) => {setSelectedStation(event.target.value)}}
                  value={selectedStation}
                >
                  <option value="">Please select city first</option>
                  {stations.map((station) => (
                    <option key={station.id} value={station.id}>
                      {station.stationName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Link to={`/seats?city=${selectedCity}&station=${selectedStation}`}>
              <button className="search-btn">Search</button>

            </Link>

          </form>
        </div>
      </section>
    </div>
  );
}
