import React from 'react';
import Logo from './logo.png'; 

function Cabecalho() {
  return (
   <div className='Cabecalho'>
    <div className='Marca_logo'>
        <img className='Marca' src={Logo} alt="Logo" />
        <h1 className='HealthGuardian'>Health Guardian</h1>  
    </div>
      <div className='Links'>
        <a href="#" className='Pagina_HealthGuardian'>HealthGuardian</a>  
        <a href="#">Criadores</a>
      </div>  
      <button className='Deslogar'>Deslogar</button>
   </div>
  );
}

export default Cabecalho;