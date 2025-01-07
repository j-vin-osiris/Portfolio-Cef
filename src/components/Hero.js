import myImage from "../assets/images/hero-bg.jpg";
import Modal from "./modale";

// construction de la section "Hero" avec photo+text + import du component modal
const Hero = () => {
  return (
    <section
      id="section_hero"
      className="text-white d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="text-center">
        <h1 className="display-1">Bonjour, Je suis John Doe</h1>
        <h2 className="display-4">Développeur web full stack</h2>

        <Modal />
      </div>
    </section>
  );
};
export default Hero;
