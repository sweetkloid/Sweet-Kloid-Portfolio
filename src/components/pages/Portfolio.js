import React from 'react';
import imageOne from '../../images/ph1.PNG';
import imageTwo from '../../images/ph2.PNG';
import imageThree from '../../images/ph3.jpg';
import imageFour from '../../images/ph4.jpg';
import '../../styles/Portfolio.css';

export default function Portfolio() {
  return (
    <div className='section2'>
      <h1 className='title2'>Current Projects</h1>
      <div className='images2'>
        <div className='images1'>
          <a href='https://cooljh2k.github.io/dis-cover-music/'>
            <img src={imageOne} alt="Image description" className='img2'/>
         
          <div class="overlay">
            <div class="text">dis-Cover Music</div>
          </div>
           </a>
        </div>
          <div className='images1'>
            <a href='https://mental-oasis.herokuapp.com/'>
              <img src={imageTwo} alt="Image description" className='img2' />
            <div class="overlay">
              <div class="text">Mental-Oasis</div>
            </div> 
            </a>
          </div>
      </div>
      <div className='images2'>
        <div className='images1'>
          <a>
            <img src={imageThree} alt="Image description" className='img2' />
          
          <div class="overlay">
            <div class="text">Pending</div>
          </div>
          </a>
        </div>
        <div className='images1'>
          <a href='https://github.com/sweetkloid'>
            <img src={imageFour} alt="Image description" className='img2' />
          
          <div class="overlay">
            <div class="text">GitHub</div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}