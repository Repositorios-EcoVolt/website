import Login from "./pages/Login/Login"
import Team from "./pages/Team/Team.jsx"
import Welcome from "./pages/Welcome/Welcome"
import NotFound from "./pages/NotFound/NotFound"
import Gallery from "./pages/Gallery/Gallery.jsx"
import Sponsors from "./pages/Sponsors/Sponsors.jsx"
import Prototype1 from "./pages/Prototype1/Prototype1.jsx"
import Prototype2 from "./pages/Prototype2/Prototype2.jsx"
import Unauthorized from "./pages/Unauthorized/Unauthorized"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import RestorePassword from "./pages/RestorePassword/RestorePassword.jsx"
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

/*
  function CheckUserRole() {

    const [role, setRole] = useState("");

    useEffect(() => {
      try{
        const token = localStorage.getItem("token");
        const decodeToken = jwt_decode(token);
        const userRole = decodeToken.role;
        setRole(userRole);
        console.log("El rol que tiene es el de: ");
        console.log(userRole);
      }catch(err){
        console.log("Error: ");
        console.log(err);
      }

    }, []);
    return role;
  }  
*/


function App() {
  //const userRole=CheckUserRole()

  return (
    <Router>
      <Routes>
        {/* Rutas publicas */}
        <Route exact path="/" element={<Welcome />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/prototype1" element={<Prototype1 />} />
        <Route path="/prototype2" element={<Prototype2 />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/restorepassword" element={<RestorePassword />} />
        
        

        {/* Ruta no autorización */}
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* Ruta por defecto cuando ninguna coincide */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
