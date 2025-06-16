import React from 'react';
import './HighlightSection.css';
import highlightImage from '../assets/banner3.jpg'; // substitua com sua imagem real

const HighlightSection = () => {
  return (
    <section className="highlight-section">
      <div className="highlight-content">
        <div className="highlight-text">
          <h2>Transformando ideias em realidade</h2>
          <p>
            Somos especialistas em criar soluções digitais criativas, modernas e funcionais. 
            Nossos projetos são pensados com foco no design, na performance e na experiência do usuário.
          </p>
        </div>
        <div className="highlight-image">
          <img src={highlightImage} alt="Ilustração destaque" />
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
