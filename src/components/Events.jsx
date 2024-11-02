import React from 'react';

function Events() {
  const events = [
    {
      title: "Sustainable Farming Workshop",
      date: "January 15, 2024",
      description: "Learn about sustainable farming practices and their implementation."
    },
    {
      title: "Agricultural Technology Seminar",
      date: "February 1, 2024",
      description: "Explore the latest technologies in modern agriculture."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Upcoming Events</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
            <p className="text-green-600 mt-2">{event.date}</p>
            <p className="text-gray-600 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;