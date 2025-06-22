import React, { useState } from 'react';
import { Clapperboard, Menu, X } from 'lucide-react';
import NavLink from './NavLink';

const Header = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "Upcoming Projects", "Auditions", "Contact"];

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10 shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] transition-all">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2 select-none">
          <Clapperboard className="text-amber-400 h-7 w-7" />
          <span className="text-xl font-bold text-white tracking-widest font-serif uppercase">Shyamanga Pictures</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <NavLink
              key={link}
              active={activePage === link}
              onClick={() => handleNavClick(link)}
              underline
            >
              {link}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 border-b border-white/10">
          <nav className="flex flex-col items-center py-4 space-y-2">
            {navLinks.map(link => (
              <NavLink
                key={link}
                active={activePage === link}
                onClick={() => handleNavClick(link)}
                underline
              >
                {link}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
