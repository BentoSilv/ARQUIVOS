// components/SectionWithImageAndText.jsx
import './SectionWithImageAndText.css';

const SectionWithImageAndText = () => {
  return (
    <section className="section-with-image-and-text">
      <div className="content-left">
        <img src="/public/imagem/drr.jpg" alt="Imagem ilustrativa" />
      </div>
      <div className="content-right">
        <h2>SOBRE NÓS</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
        </p>
      </div>
    </section>
  );
};

export default SectionWithImageAndText;
