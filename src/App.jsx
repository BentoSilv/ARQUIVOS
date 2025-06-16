import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Contacto from './pages/Contacto';
import LoginPage from './pages/LoginPage';
import './index.css';


function App() {
  return (
    <Router>
      <Header />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<LoginPage />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
