import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const slides = [

  "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg",
];
const Carousel = () => {
  const [current, setCurrent] = useState(2);
  return (
    // make a main div
    // and main div has 3 div
    // 1. for left arrow
    // 2. for images
    // 3. for right arrow

    <div className="main">
      <div className="left-arrow">
        <FaChevronLeft/>
      </div>
      <div className="images">
        {
            slides.map((item, index) => 
            current === index && (
                <img key={index} src={item}  />
            )
        )}
      </div>
      <div className="right-arrow">
        <FaAngleRight/>
      </div>
    </div>
  );
};

export default Carousel;
