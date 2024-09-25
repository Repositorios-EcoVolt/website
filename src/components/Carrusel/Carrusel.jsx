import React, { useState, useEffect } from 'react';
import './carrusel.css';

const imagenes = [
  'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g',
  'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://www.https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.com/es-es/foto/foto-del-bmw-e46-blanco-707046/-4.jpg',
  'https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

export default function Carrusel() {
    const [indiceActual, setIndiceActual] = useState(0);
  
    useEffect(() => {
      const intervalo = setInterval(() => {
        setIndiceActual((prevIndice) =>
          prevIndice === imagenes.length - 1 ? 0 : prevIndice + 1
        );
      }, 5000);
  
      return () => clearInterval(intervalo);
    }, []);
  
    return (
      <div className="carrusel">
        {imagenes.map((imagen, indice) => (
          <div
            key={indice}
            className={`carrusel-imagen ${indice === indiceActual ? 'activo' : ''}`}
            style={{ backgroundImage: `url(${imagen})` }}
          ></div>
        ))}
      </div>
    );
  }