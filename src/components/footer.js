import React from 'react';
import footerIcon from '../images/footer.png';
import '../styles/footer.css'
export default function Footer() {
  return (
    <div className='footer'>
      <a href='https://github.com/sweetkloid'>
      <img src={footerIcon} alt="Footer Icon" className="icon" />
      </a>
    </div>
  );
}
