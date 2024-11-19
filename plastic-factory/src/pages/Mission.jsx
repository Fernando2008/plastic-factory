import pdf from "../assets/Logo_for_Plastic_Factory_production.pdf";
import "../css/Mission.css";

const Mission = () => {
  return (
    <>
      <div className="mission">
        <div className="mission-left">
          <p id="mission-wrap">
            Plastic Factory Films is dedicated to fostering collaboration with
            the next generation of filmmakers. It creates a space where students
            are actively participating in the studio action, engaging in
            hands-on learning experiences through the PCTO programs. Driven by a
            genuine passion for cinema, the studio prioritizes creativity and
            innovation, embracing fresh ideas and techniques to craft stories
            that have lasting cultural, emotional, and intellectual value.
            Plastic Factory Films ensures that the next generation of filmmakers
            is equipped with the tools and perspectives needed to evolve the art
            form and continue its transformation in meaningful ways.
          </p>
        </div>
        <div className="mission-right">
          <div className="mission-pdf">
            <iframe src={pdf} frameBorder="0"></iframe>
          </div>
          <div className="mission-desc">
            This website and the Plastic Factory logo concept were created by
            students from Rampone Polo and ITI Faraday through the PCTO program
            (September - October 2024). It was a pleasure for our studio to
            collaborate with these talented students, and we look forward to
            providing them with more opportunities in the future.
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
