import Patrocinios from './pages/Patrocinios/Patrocinios';
import Principal from './pages/Principal/Principal';
import Equipo from './pages/Equipo/Equipo';
import Areas from './pages/Areas/Areas';

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
        <Route exact path="/equipo" element={<Equipo />} />
        <Route exact path="/patrocinios" element={<Patrocinios />} />
      </Routes>
    </Router>
  )
}

export default App