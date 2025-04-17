import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const slides = [
  "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg",
  "https://cdn.pixabay.com/photo/2024/05/14/10/51/ai-generated-8760871_1280.png",
  "https://cdn.pixabay.com/photo/2024/01/26/15/42/venom-8534168_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/07/24/16/40/background-7342022_1280.jpg"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const autoSlide = true
  const autoSlideInterval = 2000

  const nextSlide = () =>{
    setCurrent(current === slides.length - 1 ? 0 : current + 1 )
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length -1 : current - 1)
  }

  useEffect(() => {
    if(!autoSlide) return
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, current])
  

  return (
    // make a main div
    // and main div has 3 div
    // 1. for images
    // 2. for arrow buttons
    // 3. for indicators

    <div className="main relative flex items-center gap-1 h-[80vh] w-[100vw] sm:h-[80vh] sm:w-[40vh] md:h-[90vh] md:w-[50vh] lg:h-[90vh] lg:w-[50vh] ">
      
      <div className="images h-[80vh] w-[100vw] sm:h-[80vh] sm:w-[40vh] md:h-[90vh] md:w-[50vh] lg:h-[90vh] lg:w-[50vh]">
        {slides.map(
          (item, index) => current === index && <img key={index} src={item} className="h-full w-full  object-cover" />
        )}
      </div>
      
      <div className="buttons absolute flex justify-between items-center h-full w-full text-white">
      <button onClick={() => prevSlide()} className="left-arrow bg-black/70 py-5 px-2 ">
        <FaChevronLeft />
      </button>
      <button type="button" onClick={() => nextSlide()} className="right-arrow bg-black/70 py-5 px-2 ">
        <FaAngleRight />
      </button>
      </div>
      <div className="absolute flex gap-2 items-center bottom-3 left-[20vh] "   >
        {
          slides.map((_,i) => (
            <div key={i} className={` transition-all w-3 h-3 bg-white rounded-full ${ current === i ? "p-2" : "opacity-50"}`} ></div>
          ))
        }
      </div>
    </div>
  );
};

export default Carousel;
