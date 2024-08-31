// TerceraSeccion.js
import React from 'react';
import HeroSection from './HeroSection'; // Asegúrate de importar el componente HeroSection

function TerceraSeccion() {
  return (
    <HeroSection
      title="Discover More About Us"
      subtitle="Explore our features and services"
      imageUrl={`${process.env.PUBLIC_URL}/logo192.png`}
      buttonText="Learn More"
      onButtonClick={() => alert('TerceraSeccion button clicked!')}
    />
  );
}

export default TerceraSeccion;
