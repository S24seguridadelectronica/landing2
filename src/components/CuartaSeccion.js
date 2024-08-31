// CuartaSeccion.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CuartaSeccion.css';

function CuartaSeccion({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleImageClick = (index) => {
    setExpandedIndex(index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  const handleAskClick = () => {
    const image = images[expandedIndex];
    const message = `Hola, estoy interesado en el producto con la descripción: ${image.caption}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="cuarta-seccion">
      <div className="carousel-container">
        <div className="carousel-content">
          <div
            className="image-grid"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className="image-item" key={index} onClick={() => handleImageClick(index)}>
                <img
                  className="image"
                  src={image.src}
                  alt={image.alt}
                />
                <div className="caption">
                  <h3>{image.caption}</h3>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-button prev-button" onClick={handlePrev}>
            &lt;
          </button>
          <button className="carousel-button next-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>

      {expandedIndex !== null && (
        <div className="expanded-image-overlay" onClick={handleClose}>
          <div className="expanded-image-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>✕</button>
            <img
              className="expanded-image"
              src={images[expandedIndex].src}
              alt={images[expandedIndex].alt}
            />
            <div className="expanded-caption">
              <h3>{images[expandedIndex].caption}</h3>
              <button className="ask-button" onClick={handleAskClick}>Preguntar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

CuartaSeccion.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
    })
  ).isRequired,
};

export default CuartaSeccion;
