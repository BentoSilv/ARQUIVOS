import { useEffect, useState } from 'react';
import './HeroSlider.css';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';


const slides = [
  {
    id: 1,
    image:banner1,
    title: 'Tecnologia de Ponta',
    description: 'Soluções modernas para o seu negócio.',
  },
  {
    id: 2,
    image: banner2,
    title: 'Inovação Constante',
    description: 'Estamos sempre um passo à frente.',
  },
  {
    id: 3,
    image: banner3,
    title: 'Trabalho em Equipe',
    description: 'Juntos alcançamos mais.',
  },
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  const goToSlide = (i) => setIndex(i);
  const prevSlide = () => setIndex(index === 0 ? slides.length - 1 : index - 1);
  const nextSlide = () => setIndex((index + 1) % slides.length);

  return (
    <div className="slider">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {i === index && (
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          )}
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>‹</button>
      <button className="next" onClick={nextSlide}>›</button>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
