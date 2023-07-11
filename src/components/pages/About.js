import React from 'react';
import imageSrc from '../../images/image.jpg';
import '../../styles/About.css';

export default function About() {
  return (
    <div className="section">
      <h1 className="title">About Me</h1>
      <img src={imageSrc} alt="Image description"  className="img1"/> 
      <p className="infosection">
        Full-stack JavaScript developer with a background in animal care. I trained at the University of Central Florida boot camp to earn a certificate in full stack web development focused on JavaScript. It was a dream on and off as a kid to learn coding. I took a MATLAB coding class back in college and really enjoyed the challenge. Teamwork and creativity are always my go to when looking for a job to build my skills building projects.
      </p>
    </div>
  );
}