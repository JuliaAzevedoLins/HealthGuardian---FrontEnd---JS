import React from 'react';
import './Header.css';
import Logo from '../Header/logo.png'; 

function Header() {
  return (
   <div className='Header'>
      <img className='logo' src={Logo} alt="Logo" />
      <h1 className='Titulo'>Health Guardian</h1>      
   </div>
  );
}

export default Header;
