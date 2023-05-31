import React from 'react';
import imageOne from '../../images/ph1.jpg';
import imageTwo from '../../images/ph2.jpg';
import imageThree from '../../images/ph3.jpg';
import imageFour from '../../images/ph4.jpg';
import '../../styles/Portfolio.css';

export default function Portfolio() {
  return (
    <div className='section2'>
      <h1 className='title2'>Current Projects</h1>
      <div className='images1'>
      <img src={imageOne} alt="Image description" className='img2' data-title='Project 1'/> 
      <img src={imageTwo} alt="Image description" className='img2' data-title='Project 2' /> 
      </div>
      <div className='images2'>
      <img src={imageThree} alt="Image description" className='img2' data-title='Project 3'/> 
      <img src={imageFour} alt="Image description" className='img2' data-title='TBD'/> 
    </div>
    </div>
  );
}