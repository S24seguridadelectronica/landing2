import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './HeroSection.css'; // Asegúrate de que los estilos estén correctamente configurados

function HeroSection({
  title,
  additionalTitle, // Nuevo prop para el título adicional
  subtitle,
  imageUrl,
  buttonText,
  onButtonClick
}) {
  return (
    <section className="hero-section">
      <Container fluid>
        <Row className="hero-row">
          <Col md={6} className="text-column">
            <h1 className="hero-title">{title}</h1>
            {additionalTitle && <h2 className="hero-additional-title">{additionalTitle}</h2>} {/* Nuevo título */}
            <p className="hero-subtitle">{subtitle}</p>
          </Col>
          <Col md={6} className="image-column">
            <img src={imageUrl} alt="Hero" className="hero-image" />
          </Col>
        </Row>
        <div className="floating-button">
          <Button 
            variant="light" 
            className="hero-button" 
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  additionalTitle: PropTypes.string, // Prop adicional para el título
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func
};

HeroSection.defaultProps = {
  buttonText: 'Call Us!',
  onButtonClick: () => {}
};

export default HeroSection;
