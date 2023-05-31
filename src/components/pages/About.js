import React from 'react';
import imageSrc from '../../images/image.jpg';
import '../../styles/About.css';

export default function About() {
  return (
    <div className="section">
      <h1 className="title">About Me</h1>
      <img src={imageSrc} alt="Image description"  className="img1"/> 
      <p className="infosection">
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
