import React from 'react';
import Logo from './logo.png'; 

function Header() {
  return (
   <div className='Header'>
      <img className='logo' src={Logo} alt="Logo" />
      <h1 className='Titulo'>Health Guardian</h1>  
      <link rel="HealthGuardian" href="#"></link>   
      <link rel="Criadores" href="#"></link>  
      <link rel="Experime" href="#"></link>   
   </div>
  );
}

export default Header;