// components/Newsletter.jsx
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-full">
      <div className="newsletter-container">
        <h2>Receba Novidades em Primeira Mão</h2>
        <p>Assine a Nossa newsletter e fique por dentro das novidades e ofertas exclusivas.</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            required
          />
          <button type="submit">Inscrever-se</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
