import React from 'react';

const NavLink = ({ active, onClick, children, underline }) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2 text-base font-medium transition-colors duration-300 tracking-wide
      ${active ? 'text-amber-400' : 'text-gray-200 hover:text-white'}
      focus:outline-none
    `}
    style={{ outline: 'none', border: 'none' }}
  >
    {children}
    {underline && (
      <span
        className={`block mx-auto mt-1 h-[2px] rounded transition-all duration-300
          ${active ? 'w-8 bg-amber-400' : 'w-0 bg-transparent group-hover:w-8 group-hover:bg-amber-400'}`}
      />
    )}
  </button>
);

export default NavLink;
