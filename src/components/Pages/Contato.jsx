import React, { useState } from "react";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
    alert("Mensagem enviada com sucesso!");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <main style={styles.container}>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
          rows="5"
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </main>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    resize: "vertical",
  },
  button: {
    padding: "12px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Contato;
