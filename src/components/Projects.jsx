import React, { useState } from 'react';

function Projects() {
  const [activeTab, setActiveTab] = useState('ongoing');

  const projects = {
    ongoing: [
      {
        title: "Sustainable Agriculture Initiative",
        date: "Current",
        description: "Implementing sustainable farming practices in local communities."
      },
      {
        title: "Agricultural Technology Workshop Series",
        date: "Current",
        description: "Weekly workshops on modern farming technologies."
      }
    ],
    upcoming: [
      {
        title: "Smart Farming Conference",
        date: "March 2024",
        description: "International conference on smart farming technologies."
      },
      {
        title: "Agricultural Innovation Challenge",
        date: "April 2024",
        description: "Competition for innovative agricultural solutions."
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-iaas-black mb-8">Projects</h2>
      
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'ongoing'
              ? 'bg-iaas-green text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('ongoing')}
        >
          Ongoing Projects
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'upcoming'
              ? 'bg-iaas-green text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Projects
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects[activeTab].map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-iaas-orange">
            <h3 className="text-xl font-semibold text-iaas-black">{project.title}</h3>
            <p className="text-iaas-green mt-2">{project.date}</p>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;