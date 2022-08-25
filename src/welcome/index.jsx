import React from 'react';
import './welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div>
        <p className="title">
          Bienvenido a mi solución, mi nombre es Fidel Parabacuto
        </p>
      </div>
      <div className="contact-container">
        <p>Puedes contactarme en:</p>
        <div className="contact">
          <a
            href="https://api.whatsapp.com/send?phone=5491163083418&text=Hola,%20¿Qué%20tal%20estás?%20Charlemos%20:)"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            Whatsapp: +5491163083418
          </a>
          <a
            href="http://www.linkedin.com/in/fidelp27"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            LinkedIn: www.linkedin.com/in/fidelp27
          </a>
          <a
            href="mailto:fidevp27@gmail.com?Subject=Oferta%20laboral%20%20"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Email:fidevp27@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
export { Welcome };
