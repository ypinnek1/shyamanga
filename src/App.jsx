import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UpcomingProjectsPage from './pages/UpcomingProjectsPage';
import AuditionsPage from './pages/AuditionsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage />;
      case 'Upcoming Projects':
        return <UpcomingProjectsPage />;
      case 'Auditions':
        return <AuditionsPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen min-w-full w-screen h-screen font-sans">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
