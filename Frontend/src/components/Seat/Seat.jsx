import "../../CSS/seats.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../CSS/styles.css";
import axios from "axios";

export default function Seat() {
  const [count, setCount] = useState(0);
  const [seats, setSeats] = useState([]);

  const queryParam = new URLSearchParams(window.location.search);
  const station = queryParam.get("station");

  const incrementCount = (event) => {
    if (event.target.classList.contains("selected")) {
      event.target.classList.toggle("selected");
      setCount(count - 1);
    } else {
      event.target.classList.toggle("selected");
      setCount(count + 1);
    }
  };

  const getSeats = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/input/seats?station=${station}`);
      const totalSeats = response.data;
      const seatsArray = Array.from({ length: totalSeats }, (_, index) => index + 1);
      setSeats(seatsArray);
    } catch (error) {
      console.error("Error fetching seats:", error);
    }
  };

  useEffect(() => {
    getSeats();
  }, []);

  const handleCheckout = () => {
    window.location.href("/checkout")
  }

  const renderSeatRows = () => {
    const rows = [];
    for (let i = 0; i < seats.length; i += 8) {
      rows.push(
        <div className="row" key={i}>
          {seats.slice(i, i + 8).map((seat, index) => (
            <div className="seat" key={index} onClick={incrementCount}></div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="bg-img1">
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
          <Link to="/login" className="Login">
            Login
          </Link>
        </div>
      </nav>

      <section className="seat-section">
        <div className="container">
          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>Available seats</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>
          <div className="seats">
            <div className="seat-container">
              {renderSeatRows()}
            </div>
          </div>
          <p className="text">
            You have selected <span id="count">{count}</span> seats for a price
            of Rs. <span id="total">{count * 100}</span>
          </p>
          <Link className="button" to={"/checkout"}>Checkout</Link>
        </div>
      </section>
    </div>
  );
}
