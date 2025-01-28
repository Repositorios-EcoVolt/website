import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './team.css';

function Team() {
  const [selectedArea, setSelectedArea] = useState(null);

  const teamMembers = [
    {
      name: "Juan Pérez",
      area: "Dirección General",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non justo mauris. Etiam scelerisque lorem ac ante lobortis, et malesuada lorem varius. Nullam et libero in lorem cursus fermentum.",
      imageUrl: "https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png"
    },
    {
      name: "Ana Gómez",
      area: "Desarrollo de Proyectos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non justo mauris. Etiam scelerisque lorem ac ante lobortis, et malesuada lorem varius. Nullam et libero in lorem cursus fermentum.",
      imageUrl: "https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png"
    },
    {
      name: "Carlos Ruiz",
      area: "Marketing Digital",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non justo mauris. Etiam scelerisque lorem ac ante lobortis, et malesuada lorem varius. Nullam et libero in lorem cursus fermentum.",
      imageUrl: "https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png"
    },
    {
      name: "Laura Martínez",
      area: "Recursos Humanos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non justo mauris. Etiam scelerisque lorem ac ante lobortis, et malesuada lorem varius. Nullam et libero in lorem cursus fermentum.",
      imageUrl: "https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png"
    },
    {
      name: "Pedro Sánchez",
      area: "Finanzas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non justo mauris. Etiam scelerisque lorem ac ante lobortis, et malesuada lorem varius. Nullam et libero in lorem cursus fermentum.",
      imageUrl: "https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png"
    },
    {
      name: "María López",
      area: "Atención al Cliente",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit massa sit amet velit interdum, at luctus erat lobortis. Fusce sollicitudin nisl at enim scelerisque laoreet. Nulla eget enim erat.",
      imageUrl: "https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="team-header">
        <h2>El Equipo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra euismod quam, non mollis purus
          pretium et. Vivamus ut nisi justo. Curabitur ut sollicitudin velit, id varius libero.
        </p>
      </div>

      <div className="team-container team1">
        {teamMembers.map((member, index) => (
          <div className="team-card pro-pic" key={index}>
            <img src={member.imageUrl} alt={member.name} className="card-img" />
            <div className="team-card-info">
              <h3>{member.name}</h3>
              <p className="subtitle">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Team;
