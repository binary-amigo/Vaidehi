import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const handleGenerateReceipt = () => {
    // Code to generate receipt
    
  };

  const handleShoppingFood = () => {
    // Code for shopping food

  };

  return (
    <div className="bg-img1 h-screen flex justify-center">
      <Link to="" onClick={handleGenerateReceipt} className="btn">Generate Receipt</Link>
      <Link to="/shop" onClick={handleShoppingFood} className="btn">Shop Food</Link>
    </div>
  );
};

export default Checkout;
