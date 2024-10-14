import Patrocinios from './pages/Patrocinios/Patrocinios';
import Principal from './pages/Principal/Principal';
import Equipo from './pages/Equipo/Equipo';
import Areas from './pages/Areas/Areas';
import Acerca from './pages/Acerca/Acerca';
import Competencia from './pages/Competencia/Competencia';
import Prototipos from './pages/Prototipos/Prototipos';
import Trayectoria from './pages/Trayectoria/Trayectoria';
import Contacto from './pages/Contacto/Contacto';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        {/* Rutas publicas */}
        <Route exact path="/" element={<Principal />} />
        <Route exact path="/areas" element={<Areas />} />
        <Route exact path="/acerca" element={<Acerca />} />
        <Route exact path="/competencia" element={<Competencia />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/trayectoria" element={<Trayectoria />} />
        <Route exact path="/prototipos" element={<Prototipos />} />
        <Route exact path="/equipo" element={<Equipo />} />
        <Route exact path="/patrocinios" element={<Patrocinios />} />
      </Routes>
    </Router>
  )
}

export default App