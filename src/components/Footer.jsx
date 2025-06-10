// components/Footer.jsx
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
      <img src="/public/imagem/lg.png" alt="MinhaEmpresa" className="footer-logo-img" />
          <p>Transformando ideias em soluções digitais com excelência e inovação.</p>
        </div>

        <div className="footer-col">
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Termos de Serviço</a></li>
            <li><a href="#">Central de Ajuda</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <ul>
            <li>Email: contato@minhaempresa.com</li>
            <li>WhatsApp: (+244) 931643911</li>
            <li>Endereço: Rua Benfica-Luanda, 222</li>
          </ul>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MinhaEmpresa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
