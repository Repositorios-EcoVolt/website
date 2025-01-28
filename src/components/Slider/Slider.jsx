import React, { useState, useEffect } from 'react';
import './slider.css';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [fade, setFade] = useState(true); 
  const images = [
    "https://images.pexels.com/photos/209207/pexels-photo-209207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12789/pexels-photo-12789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  const titles = [
    "Título 1",
    "Título 2",
    "Título 3"
  ];

  const texts = [
    "Texto descriptivo 1",
    "Texto descriptivo 2",
    "Texto descriptivo 3"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
        setFade(true); 
      }, 500);
    }, 4000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carousel-container">
      <div className={`carousel-slide ${fade ? 'fade-in' : 'fade-out'}`}>
        <div className="carousel-text">
          <h2>{titles[currentIndex]}</h2>
          <p>{texts[currentIndex]}</p>
        </div>
        <img 
          className="carousel-image" 
          src={images[currentIndex]} 
          alt={`slide ${currentIndex + 1}`} 
        />
      </div>
    </div>
  );
}

export default Slider;
