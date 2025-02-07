import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Areas from "./pages/Areas";
import Values from "./pages/Values";
import History from "./pages/History";
import NotFound from "./pages/NotFound";
import Sponsors from "./pages/Sponsors";
import Prototype from "./pages/Prototype";
import Competition from "./pages/Competition";
import Unauthorized from "./pages/Unauthorized";
import MisionVision from "./pages/MisionVision";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas ordenadas por longitud */}
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/values" element={<Values />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/history" element={<History />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/prototype/:name" element={<Prototype />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/mision-vision" element={<MisionVision />} />

        {/* Ruta sin autorización */}
        <Route path="/unauthorized" element={<Unauthorized />} />        

        {/* Ruta no encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
