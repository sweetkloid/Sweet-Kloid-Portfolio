import React from 'react';
import imageOne from '../../images/ph1.jpg';
import imageTwo from '../../images/ph2.jpg';
import imageThree from '../../images/ph3.jpg';
import imageFour from '../../images/ph4.jpg';
export default function Portfolio() {
  return (
    <div>
      <h1>Current Projects</h1>
      <img src={imageOne} alt="Image description" /> 
      <img src={imageTwo} alt="Image description" /> 
      <img src={imageThree} alt="Image description" /> 
      <img src={imageFour} alt="Image description" /> 
    </div>
  );
}