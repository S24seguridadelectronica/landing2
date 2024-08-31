// ImageSection.js
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import './ImageSection.css';

function ImageSection({ imageUrls, altTexts }) {
  return (
    <section className="image-section">
      <Container fluid>
        <Row className="image-row">
          {imageUrls.map((url, index) => (
            <Col md={6} key={index} className="image-column">
              <img src={url} alt={altTexts[index]} className="section-image" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

ImageSection.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  altTexts: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageSection;
