import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import SideBar from "./SideBar";
import "../styling/products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(-1);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios
      .get("https://slash-backend.onrender.com/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching Products ", products));
  }, []);

  const handleMinPrice = (price) => setMinPrice(() => price);

  const handleMaxPrice = (price) => setMaxPrice(() => price);

  const handleRating = (rating) => setRating(() => rating);

  const VerticalLine = ({ height }) => {
    return <div className="vertical-line" style={{ height }}></div>;
  };

  return (
    <div className="container-box">
      <div className="container-products">
        {products["data"] &&
          products["data"].map((product) => (
            <Card
              product={product}
              minPrice={minPrice}
              maxPrice={maxPrice}
              rating={rating}
            />
          ))}
      </div>
      <div className="vl"></div>
      <div className="container-sidebar">
        <SideBar
          handleMinPrice={handleMinPrice}
          handleMaxPrice={handleMaxPrice}
          handleRating={handleRating}
        />
      </div>
    </div>
  );
}

export default Products;
