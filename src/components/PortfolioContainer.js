import React, { useState } from 'react';
//importing all the pages
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
//defining which pages are on for open and after clicks to load those pages
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
