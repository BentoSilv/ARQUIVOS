import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Bem-vindo de volta</h2>
        <p>Faça login para continuar</p>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <div className="login-footer">
          <p>Não tem uma conta? <a href="/register">Registre-se</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
