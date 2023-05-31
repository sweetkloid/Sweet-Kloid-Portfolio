import React from 'react';
import '../styles/NavTab.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    <ul className="nav nav-tabs info">
      <li className='name'>
        <h1>SweetKloid</h1>
      </li>
      <li className="nav-item about">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
  
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item portfolio">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item contact">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
