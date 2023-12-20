import React from "react";
import "../styling/herobanner.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HeroBanner() {
  return (
    <div class="containerHomeBanner">
      <h1 className="heading1"> Spring Summer </h1>
      <h1 className="heading2"> New Arrival</h1>
      <div>
        <p className="subheading-line1">
          New collection inspired by New LifeStyle to bring ideas life
        </p>
        <p className="subheading-line2">
          Placing the power of design in everyone's hands
        </p>
      </div>
      <button className="btn">
        <Link to="/products" className="link">
          Shop Now
        </Link>
      </button>
    </div>
  );
}

export default HeroBanner;
