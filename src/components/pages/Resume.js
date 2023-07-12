import React from 'react';
import resumeFile from '../../assets/SweetKloid.pdf';
import '../../styles/Resume.css';

export default function Resume() {
  const handleDownload = async () => {
    try {
      const response = await fetch(resumeFile);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SweetKloid.pdf';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error occurred while downloading the file:', error);
    }
  };

  return(
    <div className= "section3">
      <h1 className="intro">Resume</h1>
      <div className="downloadme">
        <h3 className='types'>Download Resume:</h3>
        <button onClick={handleDownload}>Download File</button>
      </div>
    <h2 className='types2'>Front-end Proficiencies</h2>
      <ul>HTML</ul>
      <ul>CSS</ul>
      <ul>JavaScript</ul>
      <ul>JQuery</ul>
      <ul>responsive design</ul>
      <ul>React</ul>
      <ul>Bootstrap</ul>
      <ul>Bulma</ul>
   
    <h2 className='types2'>Back-end Proficiencies</h2>
      <ul>APIs</ul>
      <ul>Node</ul>
      <ul>Express</ul>
      <ul>MySQL Sequelize</ul>
      <ul>MongoDB, Mongoose</ul>
      <ul>REST</ul>
      <ul>GraphQL</ul>
    
    </div>
  );
  }