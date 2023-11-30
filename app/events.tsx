import React from 'react';

function Events() {
  return (
    <main id="events" className="flex flex-col justify-center items-center h-screen animate__animated animate__fadeIn">
      <h1 className="text-4xl font-bold text-blue-300 mb-6 animate__animated animate__fadeInDown">Upcoming Events</h1>
      <div className="event-card animate__animated animate__fadeInUp">
        <a href='/events'>
        <h2 className="text-2xl font-semibold mb-2 text-white">EditaCTF</h2>
        <p className="text-blue-400 mb-4">Date: December 4, 2023</p>
        <p className="text-gray-400">
          Designed with beginners in mind, our CTF welcomes participants of all skill levels.
        </p>
        </a>
      </div>
      {/* Add transition and animation to the second event card */}
      {/* <h1 className="text-4xl font-bold text-blue-300 mt-8 mb-6">Ongoing Events</h1> */}
      {/* <a href="/events" id="events" className="text-white mt-8">See All Events</a> */}
    </main>
  );
}

export default Events;
