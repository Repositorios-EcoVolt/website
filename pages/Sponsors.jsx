import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './css/sponsors.css';

const sponsors = [
  { name: "Shell", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuLSQCF5HXCIyriEMjDStRa6vuxP_3MlRMw&s", link: "https://www.shell.com.mx/", level: "Diamante" },
  { name: "Ansys", image: "https://seeklogo.com/images/A/ansys-logo-6AAD25ECDE-seeklogo.com.png", link: "https://www.ansys.com/", level: "Oro" },
  { name: "Solid Works", image: "https://img.icons8.com/color/512/solidworks.png", link: "https://www.solidworks.com/es", level: "Plata" },
  { name: "Ptc", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PTC_logo.svg/1200px-PTC_logo.svg.png", link: "https://www.ptc.com/", level: "Bronce" },
  { name: "Tec de Monterrey", image: "https://i0.wp.com/gershenson.mx/wp-content/uploads/2020/08/logo-tec-de-monterrey-e1484853084274.png?ssl=1", link: "#", level: "Plata" },
  { name: "Tesla", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/600px-Tesla_logo.png", link: "https://www.tesla.com/", level: "Diamante" },
  { name: "Google", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", link: "https://www.google.com/", level: "Oro" },
  { name: "Microsoft", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", link: "https://www.microsoft.com/", level: "Plata" },
  { name: "Amazon", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", link: "https://www.amazon.com/", level: "Bronce" },
  { name: "Nike", image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", link: "https://www.nike.com/", level: "Bronce" },
];

// Función para agrupar patrocinadores por nivel
const groupedSponsors = sponsors.reduce((acc, sponsor) => {
  acc[sponsor.level] = acc[sponsor.level] || [];
  acc[sponsor.level].push(sponsor);
  return acc;
}, {});

function Sponsors() {
  return (
    <>
      <Navbar />

      <div className="sponsors-hero-section">
        <div className="sponsors-overlay"></div>
        <div className="sponsors-hero-text">
          <h1>Nuestros Patrocinadores</h1>
          <p>Agradecemos el apoyo de nuestras marcas aliadas que hacen posible nuestro proyecto.</p>
        </div>
      </div>

      <div className="sponsors-container">
        {["Diamante", "Oro", "Plata", "Bronce"].map((level) => (
          <div key={level} className={`sponsors-section ${level.toLowerCase()}`}>
            <h2 className="sponsors-title">{level}</h2>
            <div className="sponsors-grid">
              {groupedSponsors[level]?.map((sponsor, index) => (
                <a key={index} href={sponsor.link} className="sponsor-card" target="_blank" rel="noopener noreferrer">
                  <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Sponsors;
