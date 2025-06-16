import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">O que oferecemos</h2>
      <div className="features-cards">
        <div className="feature-card">
          <h3>Velocidade</h3>
          <p>Nossos serviços são rápidos, práticos e pensados para otimizar seu tempo.</p>
        </div>

        <div className="feature-card">
          <h3>Segurança</h3>
          <p>Priorizamos a segurança dos dados e das interações com nossos clientes.</p>
        </div>

        <div className="feature-card">
          <h3>Suporte 24/7</h3>
          <p>Estamos sempre disponíveis para resolver dúvidas e oferecer assistência técnica.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
