import React from 'react';
import Faq from "./faq";

function Events() {
  return (
    <main className='bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 animate-movingBg min-h-screen p-5 md:px-20'>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <a href="/" className="text-blue-200 text-5xl py-5 animate__animated animate__fadeInDown">EditaCTF</a>
        <h2 className="text-white text-3xl py-3 animate__animated animate__fadeInUp">7pm December 6, 2023</h2>
        <p className="text-blue-300 text-lg animate__animated animate__fadeIn">Put your skills to the test in our first beginner-friendly Capture The Flag competition!</p>
        <p className="text-blue-300 text-lg animate__animated animate__fadeIn">Join Team Edita for a thrilling cybersecurity challenge.</p>

        <a href="/forms">
          <h1 className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline-blue">Register Now</h1>
        </a>
        
        {/* Add the new button here */}
        <h1 className='mt-4 mb-2 font-semibold text-blue-200'>Event Link</h1>
        <button
          className="bg-white bg-opacity-100 hover:bg-white hover:bg-opacity-50 text-black font-bold py-2 px-4 transition duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline-yellow rounded-2xl"
          disabled={true} // Set to true for now, enable later
        >
        <a href="https://tryhackme.com/room/editactf2k23">
          Click Here to Join
        </a>
        </button>
      </div>


            <div className="mt-10">
                <h2 className="text-white text-3xl py-5 animate__animated animate__fadeIn">Want to Get Started?</h2>
                <p className="text-white text-lg animate__animated animate__fadeIn">Get yourself acquainted with some basic knowledge of CTFs with our <a href="https://edita.frenzyvjn.tech/starter" className="text-blue-400 hover:underline">Starter Guide</a>.</p>
                <br />
                <h2 className="text-blue-200 text-3xl py-5 animate__animated animate__fadeIn">Why EditaCTF?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-slate-850 p-6 rounded-lg shadow-md shadow-blue-300 hover:shadow-xl hover:shadow-blue-400 transition duration-300 transform hover:scale-105">
                        <h3 className="text-blue-200 text-xl mb-3">Beginner-Friendly</h3>
                        <p className="text-blue-300">Designed with beginners in mind, our CTF welcomes participants of all skill levels.</p>
                    </div>
                    <div className="bg-slate-850 p-6 rounded-lg shadow-md shadow-blue-300 hover:shadow-xl hover:shadow-blue-400 transition duration-300 transform hover:scale-105">
                        <h3 className="text-blue-200 text-xl mb-3">Exciting Challenges</h3>
                        <p className="text-blue-300">Experience a variety of cybersecurity challenges that will test and enhance your skills.</p>
                    </div>
                    <div className="bg-slate-850 p-6 rounded-lg shadow-md shadow-blue-300 hover:shadow-xl hover:shadow-blue-400 transition duration-300 transform hover:scale-105">
                        <h3 className="text-blue-200 text-xl mb-3">Recognition</h3>
                        <p className="text-blue-300">Compete for and gain recognition and exposure in our cybersecurity community.</p>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-blue-200 text-3xl py-5 animate__animated animate__fadeIn">Get Ready for the Challenge!</h2>
                <p className="text-blue-300 text-lg animate__animated animate__fadeIn">Prepare yourself by exploring resources and tutorials in our <a href="https://frenzyvjn.notion.site/f5afc06a9b034a098139d8ea24225110?v=78966df24d3449bba19b126baf806bc3&pvs=4" className="text-blue-400 hover:underline">Resource Center</a>.</p>
            </div>
            <Faq />        
            <footer className="mt-16 text-center">
                <a href="/" className="text-blue-300 hover:underline">
                    &copy; 2023 EditaCTF. All rights reserved.
                </a>
            </footer>
           
        </main>
    );
}

export default Events;
