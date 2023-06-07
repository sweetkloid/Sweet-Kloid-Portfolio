import React from 'react';
import '../../styles/Resume.css';

export default function Resume() {
 
  const handleDownload = () => {
    // Perform any necessary logic before the download
    // For example, fetch the file URL or prepare the file data

    // Create a temporary download link
    const link = document.createElement('a');
    link.href = '../../assets/FAKE.pdf'; // Replace with the actual file URL or data
    link.download = 'FAKE.pdf'; // Replace with the desired file name and extension
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Clean up by removing the temporary link from the DOM
    document.body.removeChild(link);
  };

 return(
  <div class= "section3">
    <h1 class="intro">Resume</h1>
    <div class="downloadme">
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