// Animated underline using Framer Motion for NavLink
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedNavLink = ({ active, onClick, children, underline }) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2 text-base font-medium transition-colors duration-300 tracking-wide bg-gray-900 md:bg-transparent
      ${active ? 'text-amber-400' : 'text-gray-200 hover:text-amber-300'}
      focus:outline-none group`}
    style={{ outline: 'none', border: 'none' }}
  >
    <span className="relative z-10">
      {children}
    </span>
    {underline && (
      <motion.span
        layoutId={active ? "nav-underline-active" : undefined}
        className="block mt-1 h-[2px] rounded"
        initial={active ? { width: '100%', backgroundColor: '#fbbf24' } : { width: 0, backgroundColor: 'transparent' }}
        animate={{
          width: active ? '100%' : 0,
          backgroundColor: active ? '#fbbf24' : 'transparent',
        }}
        whileHover={{
          width: '100%',
          backgroundColor: '#ffe066', // lighter yellow on hover
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{ marginLeft: 0, marginRight: 0 }}
      />
    )}
    <motion.div
      className="absolute left-0 top-0 w-full h-full rounded-md pointer-events-none"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.08, background: 'linear-gradient(90deg,#fbbf24 0%,#fffbe6 100%)' }}
      transition={{ duration: 0.3 }}
    />
  </button>
);

export default AnimatedNavLink;
