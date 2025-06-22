import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Film } from 'lucide-react';
import { upcomingProjects } from '../data/projects';

const UpcomingProjectsPage = () => (
  <SectionWrapper id="upcoming" title="Upcoming Projects" icon={Film}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {upcomingProjects.map((project, index) => (
        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
          <img src={project.posterUrl} alt={project.title} className="w-full h-96 object-cover" />
          <div className="p-6">
            <span className="inline-block bg-amber-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full mb-2">
              {project.status}
            </span>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-1 font-semibold">{project.genre}</p>
            <p className="text-gray-300 text-base">{project.synopsis}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default UpcomingProjectsPage;
