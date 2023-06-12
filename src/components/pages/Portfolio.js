import React from 'react';
import imageOne from '../../images/ph1.PNG';
import imageTwo from '../../images/ph2.PNG';
import imageThree from '../../images/streamV_01.png';
import imageFour from '../../images/ph4.png';
import imageFive from '../../images/ph5.PNG';
import imageSix from '../../images/ph6.png';
import icon  from '../../images/footer.png'
import '../../styles/Portfolio.css';

export default function Portfolio() {
  return (
    <div className='section2'>
      <h1 className='title2'>Current Projects</h1>
      <div className='images2'>
        <div className='images1'>
          <div id= "imgs">
          <img src={imageOne} alt="Image description" className='img2'/> 
          </div>
         <div class="content">
          <a href='https://cooljh2k.github.io/dis-cover-music/' class="text">dis-Cover Music</a>
          <a href='https://github.com/CoolJH2K/dis-cover-music' >
          <img src={icon} alt="Image description" class="subicon"/> 
          </a>
          </div>
        </div>
        <div className='images1'>
          <div id= "imgs">
          <img src={imageTwo} alt="Image description" className='img2'/> 
          </div>
         <div class="content">
          <a href='https://mental-oasis.herokuapp.com/' class="text">Mental-Oasis</a>
          <a href='https://github.com/DavidPeguero/Mental-Oasis'>
            <img src={icon} alt="Image description" class="subicon"/> </a>
          </div>
        </div>
        <div className='images1'>
          <div id= "imgs">
          <img src={imageThree} alt="Image description" className='img2'/> 
          </div>
         <div class="content">
          <a href='streamversee.herokuapp.com' class="text">STREAMVERSE</a>
          <a href='https://github.com/emilymclean94/movie-nova'>
            <img src={icon} alt="Image description" class="subicon"/> 
          </a>
          </div>        
        </div>
        <div className='images1'>
          <div id= "imgs">
          <img src={imageFour} alt="Image description" className='img2'/> 
          </div>
         <div class="content">
          <a href=' https://sweetkloid.github.io/Code-Quiz/' class="text">Code Quiz</a>
          <a href='https://github.com/sweetkloid/Code-Quiz'>
            <img src={icon} alt="Image description" class="subicon"/> 
          </a>
          </div> 
          </div>
        <div className='images1'>
          <div id= "imgs">
          <img src={imageFive} alt="Image description" className='img2'/> 
          </div>
         <div class="content">
          <a href='https://powerful-reef-26621.herokuapp.com/' class="text">Google Books</a>
          <a href='https://github.com/sweetkloid/Google-Books' >
            <img src={icon} alt="Image description" class="subicon"/> 
          </a>
          </div>  
        </div>
        <div className='images1'>
          <div id= "imgs">
          <img src={imageSix} alt="Image description" className='img2'/> 
          </div>
         <div class="content">
          <a href='https://github.com/sweetkloid/Weather-Dashboard' class="text">Weather Dashboard</a>
          <a href=''><img src={icon} alt="Image description" class="subicon"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}