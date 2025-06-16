import HeroSlider from "../Banner/HeroSlider";
import FeaturesSection from "../components/FeaturesSection";
import HighlightSection from '../components/HighlightSection';
import CoursesSection from '../components/CoursesSection'





function Home() {
  return (
    <div>
      {/* Banner carrossel */}
      <HeroSlider />
      <FeaturesSection />
       <HighlightSection />
       <CoursesSection />

     

      {/* Conteúdo da página Home */}
      <section style={{ padding: '30px' }}>
        <h2>Bem-vindo à Home</h2>
        <p>Esta é a página inicial do site, com um banner incrível acima!</p>
      </section>
    </div>
  );
}

export default Home;
