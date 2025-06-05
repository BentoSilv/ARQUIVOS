// components/CardSection.jsx
import './CardSection.css';


const CardSection = () => {
  const cards = [
    { title: 'UI/UX DESIGNNER', text: 'Descrição breve do serviço 1' },
    { title: 'Serviço 2', text: 'Descrição breve do serviço 2' },
    { title: 'Serviço 3', text: 'Descrição breve do serviço 3' },
    { title: 'Serviço 4', text: 'Descrição breve do serviço 4' },
    { title: 'Serviço 5', text: 'Descrição breve do serviço 5' },
    { title: 'Serviço 6', text: 'Descrição breve do serviço 6' },
  ];

  return (
    <section className="card-section">
      <h2 className="section-title">Nossos Serviços</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
