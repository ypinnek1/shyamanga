import React from 'react';

const SectionWrapper = ({ id, title, children, icon: Icon }) => (
  <section id={id} className="py-16 md:py-24 bg-gray-900 text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
           {Icon && <Icon className="text-amber-400 h-10 w-10 mr-3" />}
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
