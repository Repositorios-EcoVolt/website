import React from "react";
import "./sponsors.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';

function Sponsors() {
  const sponsors = [
    { name: "Shell", logo: "https://cdn.freebiesupply.com/logos/large/2x/shell-logo-png-transparent.png", description: "Shell es una de las principales compañías de energía del mundo, conocida por su presencia global y compromiso con la sostenibilidad." },
    { name: "Ford", logo: "https://cdn.freebiesupply.com/logos/large/2x/ford-1-logo-png-transparent.png", description: "Ford es una marca líder en la fabricación de vehículos, famosa por su innovación y su legado en la industria automotriz." },
    { name: "Mercedes-Benz", logo: "https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-logo-png-transparent.png", description: "Mercedes-Benz es sinónimo de lujo y tecnología avanzada, destacándose como una de las marcas más prestigiosas en la industria automotriz." },
    { name: "Toyota", logo: "https://cdn.freebiesupply.com/logos/large/2x/toyota-1-logo-png-transparent.png", description: "Toyota es una de las marcas automotrices más grandes y confiables, conocida por sus innovaciones en eficiencia y diseño." },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="hero-section">
          <h1>Patrocinadores</h1>
          <p>
            Nos enorgullece contar con el apoyo de nuestros patrocinadores, quienes hacen posible nuestro trabajo y misión. A continuación, te presentamos algunos de ellos.
          </p>
        </section>
        <section className="sponsors-gallery">
          <h2>Nuestros Patrocinadores</h2>
          <div className="sponsors-container">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-front">
                  <img src={sponsor.logo} alt={`Logo de ${sponsor.name}`} />
                  <p>{sponsor.name}</p>
                </div>
                <div className="sponsor-back">
                  <p>{sponsor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Sponsors;
