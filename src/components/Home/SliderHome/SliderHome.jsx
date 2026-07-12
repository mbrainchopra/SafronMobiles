import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import slider1 from "../../../assets/images/slider_1.jpg";
import slider2 from "../../../assets/images/slider_2.jpg";

import "./SliderHome.css";

export default function SliderHome() {
  const slidersData = [slider1, slider2];
  const [current, setCurrent] = useState(0);

  function SlidingFunciton(is_forward) {
    const currentSlider = current;
    const length = slidersData.length;

    if (is_forward) {
      if (currentSlider + 1 < length) {
        setCurrent(currentSlider + 1);
      } else {
        setCurrent(0);
      }
    } else {
      if (currentSlider !== 0) {
        setCurrent(currentSlider - 1);
      } else {
        setCurrent(length - 1);
      }
    }
  }

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev + 1) % slidersData.length);
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="container_slider">
      <img src={slidersData[current]} alt="Slider" />

      <IoIosArrowBack
        onClick={() => SlidingFunciton(false)}
        className="slider_arrow left_arrow"
      />

      <IoIosArrowForward
        onClick={() => SlidingFunciton(true)}
        className="slider_arrow right_arrow"
      />
    </div>
  );
}
