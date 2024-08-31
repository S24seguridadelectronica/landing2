// QuintaSeccion.js
import React from 'react';
import HeroSection from './HeroSection'; // Importa el componente HeroSection

function QuintaSeccion() {
  return (
    <HeroSection
      title="Discover Our Latest Updates"
      subtitle="Stay tuned for exciting news and updates"
      imageUrl={`${process.env.PUBLIC_URL}/logo192.png`}
      buttonText="Get in Touch"
      onButtonClick={() => alert('QuintaSeccion button clicked!')}
    />
  );
}

export default QuintaSeccion;
