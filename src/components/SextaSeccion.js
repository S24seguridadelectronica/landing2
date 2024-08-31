// src/components/SextaSeccion.js
import React from 'react';
import './SextaSeccion.css'; // Importa los estilos para esta sección si es necesario

function SextaSeccion() {
  return (
    <div className="sexta-seccion">
      <h2>Contact Us</h2>
      <p className="description-text">Get in touch with us for any inquiries or support. We're here to help you!</p>
      <div className="contact-info">
        <div className="whatsapp-container">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-link">
            <img src={`${process.env.PUBLIC_URL}/whatsapp-icon.png`} alt="WhatsApp" className="contact-icon" />
          </a>
        </div>
        <div className="phone-container">
          <a href="tel:+573046615865" className="contact-link">
            <span className="phone-icon">📞</span> {/* Usa el ícono de teléfono aquí */}
            llamanos! 3046615865
          </a>
        </div>
      </div>
    </div>
  );
}

export default SextaSeccion;
