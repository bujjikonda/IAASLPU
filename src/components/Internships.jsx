import React, { useState } from 'react';

function Internships() {
  const [activeTab, setActiveTab] = useState('ongoing');

  const internships = {
    ongoing: [
      {
        title: "Agricultural Research Assistant",
        duration: "6 months",
        description: "Research position in sustainable farming practices.",
        requirements: "Bachelor's in Agriculture or related field"
      },
      {
        title: "Farm Technology Coordinator",
        duration: "3 months",
        description: "Coordinate implementation of smart farming technologies.",
        requirements: "Knowledge of AgriTech"
      }
    ],
    upcoming: [
      {
        title: "Sustainable Farming Intern",
        duration: "4 months",
        description: "Work on sustainable farming projects.",
        requirements: "Agricultural background preferred"
      },
      {
        title: "Agricultural Data Analyst",
        duration: "6 months",
        description: "Analyze farming data and create reports.",
        requirements: "Statistics and data analysis skills"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-iaas-black mb-8">Internship Opportunities</h2>
      
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'ongoing'
              ? 'bg-iaas-green text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('ongoing')}
        >
          Current Openings
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'upcoming'
              ? 'bg-iaas-green text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Opportunities
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {internships[activeTab].map((internship, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-iaas-orange">
            <h3 className="text-xl font-semibold text-iaas-black">{internship.title}</h3>
            <p className="text-iaas-green mt-2">Duration: {internship.duration}</p>
            <p className="text-gray-600 mt-2">{internship.description}</p>
            <p className="text-gray-700 mt-2 font-medium">Requirements: {internship.requirements}</p>
            <button className="mt-4 px-4 py-2 bg-iaas-orange text-white rounded hover:bg-opacity-90">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internships;