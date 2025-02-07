import React from 'react';
import { FaDumbbell, FaMedal, FaBolt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alpha from '../assets/Alpha.jpg';
import Beta from '../assets/Beta.jpg';
import Gamma from '../assets/Gamma.jpg';
import Award1 from '../assets/Award1.JPG';
import Award2 from '../assets/Award2.jpg';
import Award3 from '../assets/Award3.jpg';
import './css/prototype.css';

const prototypeImages = {
  "EcoVolt Alpha": Alpha,
  "EcoVolt Beta": Beta,
  "EcoVolt Gamma": Gamma
};

const prototypeStats = {
  "EcoVolt Alpha": {
    weight: "120 kg",
    power: "250W",
    achievement: "Ganador en eficiencia energética 2023"
  },
  "EcoVolt Beta": {
    weight: "135 kg",
    power: "300W",
    achievement: "Premio a mejor diseño estructural"
  },
  "EcoVolt Gamma": {
    weight: "110 kg",
    power: "275W",
    achievement: "Récord de velocidad en pruebas de resistencia"
  }
};

const prototypeDetails = {
  "EcoVolt Alpha": {
    design: {
      title: "Diseño de EcoVolt Alpha",
      description: "Lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.psum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue. consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.",
      image: Award1
    },
    construction: {
      title: "Construcción del EcoVolt Alpha",
      description: "FabLorem ipsum dLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.olor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.ricado con materiales compuestos ultraligeros.",
      image: Award2
    },
    onTrack: {
      title: "EcoVolt Alpha en la Pista",
      description: "Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue. dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.",
      image: Award3
    }
  },
  "EcoVolt Beta": {
    design: {
      title: "Diseño de EcoVolt Beta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.",
      image: Award2
    },
    construction: {
      title: "Construcción del EcoVolt Beta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue. Donec tristique non orci sed congue.",
      image: Award3
    },
    onTrack: {
      title: "EcoVolt Beta en la Pista",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.",
      image: Award1
    }
  },
  "EcoVolt Gamma": {
    design: {
      title: "Diseño de EcoVolt Gamma",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.nsectetur adipiscing elit. Donec tristique non orci sed congue.",
      image: Award3
    },
    construction: {
      title: "Construcción del EcoVolt Gamma",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.",
      image: Award1
    },
    onTrack: {
      title: "EcoVolt Gamma en la Pista",
      description: "Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.etur adipiscing elit. Donec tristique non orci sed congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.",
      image: Award2
    }
  }
};

function Prototype() {
  const { name } = useParams();
  const formattedName = name.replace(/-/g, " "); 
  const backgroundImage = prototypeImages[formattedName] || Alpha;
  const details = prototypeDetails[formattedName];
  const stats = prototypeStats[formattedName];

  return (
    <>
      <Navbar />
      <div 
        className="prototype-hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      >
        <div className="prototype-overlay"></div>
        <div className="prototype-hero-text">
          <h1>{formattedName}</h1>
          <p>Información sobre el prototipo {formattedName}.</p>
        </div>
      </div>

      <div className="prototype-icons-section">
        <div className="prototype-card">
          <FaDumbbell className="prototype-icon" />
          <h3>Peso</h3>
          <p>{stats.weight}</p>
        </div>

        <div className="prototype-card">
          <FaBolt className="prototype-icon" />
          <h3>Potencia</h3>
          <p>{stats.power}</p>
        </div>

        <div className="prototype-card">
          <FaMedal className="prototype-icon" />
          <h3>Logros</h3>
          <p>{stats.achievement}</p>
        </div>
      </div>      

      {details && (
        <div className="prototype-info-section">
          <section className="prototype-content">
            <img src={details.design.image} alt={details.design.title} className="prototype-image" />
            <div className="prototype-text">
              <h2>{details.design.title}</h2>
              <p>{details.design.description}</p>
            </div>
          </section>

          <section className="prototype-content home-reverse">
            <img src={details.construction.image} alt={details.construction.title} className="prototype-image" />
            <div className="prototype-text">
              <h2>{details.construction.title}</h2>
              <p>{details.construction.description}</p>
            </div>
          </section>

          <section className="prototype-content">
            <img src={details.onTrack.image} alt={details.onTrack.title} className="prototype-image" />
            <div className="prototype-text">
              <h2>{details.onTrack.title}</h2>
              <p>{details.onTrack.description}</p>
            </div>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Prototype;
