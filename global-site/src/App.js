import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "../src/components/Comum_CSS/All_components.css";
import HealthGuardian from "./components/HealthGuardian/HealthGuardian";
import Cabecalho from "./components/Cabecalho/Cabecalho";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/HealthGuardian" element={<HealthGuardian />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;