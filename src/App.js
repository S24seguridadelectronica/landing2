// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroSection from './components/HeroSection';
import ImageSection from './components/ImageSection';
import TerceraSeccion from './components/TerceraSeccion';
import CuartaSeccion from './components/CuartaSeccion';
import QuintaSeccion from './components/QuintaSeccion';
import Footer from './components/Footer';
import SextaSeccion from './components/SextaSeccion'; // Importa el nuevo componente

function App() {
  const imageUrls = [
    `${process.env.PUBLIC_URL}/logo192.png`,
    `${process.env.PUBLIC_URL}/logo192.png`
  ];

  const altTexts = ['First image', 'Second image'];

  const carouselImages = [
    { src: `${process.env.PUBLIC_URL}/logo192.png`, alt: 'Image 1', caption: 'Caption 1' },
    { src: `${process.env.PUBLIC_URL}/logo192.png`, alt: 'Image 2', caption: 'Caption 2' },
    { src: `${process.env.PUBLIC_URL}/logo192.png`, alt: 'Image 3', caption: 'Caption 3' },
    { src: `${process.env.PUBLIC_URL}/logo192.png`, alt: 'Image 4', caption: 'Caption 4' },
    { src: `${process.env.PUBLIC_URL}/logo192.png`, alt: 'Image 5', caption: 'Caption 5' },
    { src: `${process.env.PUBLIC_URL}/logo192.png`, alt: 'Image 6', caption: 'Caption 6' },
    { src: `${process.env.PUBLIC_URL}/logo192.png`, alt: 'Image 7', caption: 'Caption 7' },
    { src: `${process.env.PUBLIC_URL}/logo192.png`, alt: 'Image 8', caption: 'Caption 8' },
    { src: `${process.env.PUBLIC_URL}/logo192.png`, alt: 'Image 9', caption: 'Caption 9' },
    { src: `${process.env.PUBLIC_URL}/logo192.png`, alt: 'Image 10', caption: 'Caption 10' },
  ];

  return (
    <div>
      <HeroSection
        title="Welcome to Our Amazing Service"
        subtitle="We provide the best solutions for you"
        imageUrl={`${process.env.PUBLIC_URL}/logo192.png`}
        buttonText="Contact Us!"
        onButtonClick={() => alert('Button clicked!')}
      />
      <ImageSection
        imageUrls={imageUrls}
        altTexts={altTexts}
      />
      <TerceraSeccion />
      <CuartaSeccion
        images={carouselImages}
      />
      <QuintaSeccion />
      <SextaSeccion /> {/* Agrega el nuevo componente SextaSeccion aquí */}
      <Footer />
    </div>
  );
}

export default App;
