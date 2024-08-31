// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Asegúrate de crear un archivo CSS si deseas estilizar el pie de página

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
