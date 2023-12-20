import React, { useState } from "react";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  console.log(slides);
  return (
    <div className="sliderStyles">
      <div className="leftArrow" onClick={goToPrevious}>
        ❰
      </div>
      <div className="rightArrow" onClick={goToNext}>
        ❱
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]?.url})` }}
        className="slideStyles"
      ></div>
    </div>
  );
}

export default ImageSlider;
