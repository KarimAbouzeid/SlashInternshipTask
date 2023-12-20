import React, { useEffect, useState } from "react";
import "../styling/card.css";
import "../styling/imageslider.css";
import ImageSlider from "./ImageSlider";

function Card({ product, minPrice, maxPrice, rating }) {
  const [slides, setSlides] = useState([]);

  product["ProductVariations"].map((productVariation) =>
    productVariation["ProductVarientImages"].map(
      (productVarientImage) => productVarientImage.image_path
    )
  );

  useEffect(() => {
    if (product && product["ProductVariations"]) {
      const newSlides = product["ProductVariations"]
        .flatMap((productVariation) => productVariation["ProductVarientImages"])
        .map((image) => ({
          url: image.image_path,
          title: product.name,
        }));

      setSlides(newSlides);
    }
  }, [product]);

  return (
    product["ProductVariations"][0].price > minPrice &&
    (product["ProductVariations"][0].price <= maxPrice || maxPrice == -1) &&
    product.product_rating == rating && (
      <div className="product-card">
        <div className="continerStyles">
          <ImageSlider slides={slides} />
        </div>

        <div className="product-info">
          {/* title */}
          <h2 className="product-title">{product.name}</h2>

          {/* description */}
          <p className="product-description">{product.description}</p>

          {/* price */}
          {product["ProductVariations"].map((productVariation) => (
            <p class="product-price">Price: ${productVariation.price}</p>
          ))}

          {/* rating */}
          {product.product_rating == 0 && (
            <p class="product-rating">Rating: ☆☆☆☆☆</p>
          )}
          {product.product_rating == 1 && (
            <p class="product-rating">Rating: ★☆☆☆☆</p>
          )}
          {product.product_rating == 2 && (
            <p class="product-rating">Rating: ★★☆☆☆</p>
          )}
          {product.product_rating == 3 && (
            <p class="product-rating">Rating: ★★★☆☆</p>
          )}
          {product.product_rating == 4 && (
            <p class="product-rating">Rating: ★★★★☆</p>
          )}
          {product.product_rating == 5 && (
            <p class="product-rating">Rating: ★★★★★</p>
          )}
        </div>
      </div>
    )
  );
}

export default Card;
