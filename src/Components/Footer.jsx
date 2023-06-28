import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link to="https://www.digitalhouse.com/ar">
        <img className="logo" src="/images/DH.png" alt="DH-logo" />
      </Link>
      <div className="redesSociales">
        <Link to="https://www.instagram.com/_digitalhouse/?hl=es">
          <img className="ico" src="/images/ico-instagram.png" alt="instagram-logo" />
        </Link>
        <Link to="https://www.facebook.com/digitalhouseschool/?locale=es_LA">
          <img className="ico" src="/images/ico-facebook.png" alt="facebook-logo" />
        </Link>
        <Link to="https://wa.me/1234567890">
          <img className="ico" src="/images/ico-whatsapp.png" alt="whatsapp-logo" />
        </Link>

      </div>
    </footer>
  );
};

export default Footer;
