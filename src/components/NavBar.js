import React from "react";
import "../styling/navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbarStyle">
      <p className="tab">
        <Link to="/" className="linktab">
          Home
        </Link>
      </p>
      <p className="tab">
        <Link to="/products" className="linktab">
          Products
        </Link>
      </p>
    </div>
  );
}

export default NavBar;
