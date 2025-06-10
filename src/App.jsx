// App.jsx

import Header from './components/Header';
import Banner from './components/Banner';
import './App.css';
import CardSection from './components/CardSection.jsx';
import SectionWithImageAndText from './components/SectionWithImageAndText.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx';
import WhatsAppButton from "./components/WhatsAppButton";



function App() {
  return (
    <div>
      <Header />
      <Banner />
      <CardSection />
      <SectionWithImageAndText />
      <Newsletter />
      <Footer />
      <WhatsAppButton />


    </div>
  );
}



export default App;
