import './Contacto.css';

function Contacto() {
  return (
    <section className="contact-container">
      <h2>Fale Conosco</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="assunto">Assunto:</label>
          <input type="text" id="assunto" name="assunto" required />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
        </div>

        <button type="submit" className="btn-enviar">Enviar Mensagem</button>
      </form>
    </section>
  );
}

export default Contacto;
