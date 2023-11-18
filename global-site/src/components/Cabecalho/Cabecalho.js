import React from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <div className="Cabecalho">
      <div className="Marca_logo">
        <img className="Marca" src={Logo} alt="Logo" />
        <h1 className="HealthGuardian">Health Guardian</h1>
      </div>
      <div className="Links">
        <Link to="/HealthGuardian">HealthGuardian</Link>
        <Link to="/Login">Cria</Link>
      </div>
      <Link className="Deslogar" to="/Login">
        Deslogar
      </Link>
    </div>
  );
}

export default Cabecalho;
