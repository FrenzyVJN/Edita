"use client"
import React from 'react';
import styled from 'styled-components';
import 'animate.css';



const Faq = () => {

  return (
    <main className='bg-inherit py-10 to-slate-950 animate-movingBg min-h-screen md:px-20'>
      <div className=''>
        <h1 className='text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown text-blue-400 py-10 text-center'>FAQs</h1>
        
        <div className="bg-inherit my-3 text-white border p-5 md:w-full mx-auto  rounded-lg animate__animated animate__fadeInDown shadow-md shadow-blue-300" >
          <p>Hi! This is the Edita team. We are hosting the Edita CTF and hope you like it!</p>
          <a className='text-blue-400' href='https://discord.gg/fAYXx2PN/'>Join us here</a>
        </div>

        <div className="bg-inherit my-3 text-white border p-5 md:w-full rounded-lg animate__animated animate__fadeInDown mx-auto shadow-md shadow-blue-300" >
          <p>Edita CTF is a small CTF made by us to give our participants a basic understanding of online CTFs.</p>
          </div>

        <div className="bg-inherit my-3 text-white border p-5 md:w-full rounded-lg animate__animated animate__fadeInDown mx-auto shadow-md shadow-blue-300" >
          <p>You don't need to have a high grasp of any programming language for this, but there may be some knowledge requirement for cryptography challenges which can be learned within the timeframe of the CTF.</p>
          </div>

        <div className="bg-inherit my-3 text-white border p-5 md:w-full rounded-lg animate__animated animate__fadeInDown mx-auto shadow-md shadow-blue-300" >
          <p>More than skills, CTFs require you to have a cracking mindset like how can you get past this restriction, how to decipher this text, etc.</p>
          </div>

        <div className="bg-inherit my-3 text-white border md:w-full p-5 rounded-lg animate__animated animate__fadeInDown mx-auto shadow-md shadow-blue-300" >
          <p>Every problem has a solution, and you just have to try to find it stubbornly. There shall naturally be hints to some problems.</p>
          </div>

        <div className="bg-inherit my-3 text-white border p-5 md:w-full rounded-lg animate__animated animate__fadeInDown mx-auto shadow-md shadow-blue-300">
          <p>What if you're stuck? Well, Google has all the answers you need. Heck, it might even give you the answer directly, but we hope you try to solve it yourselves after seeing the solution since there is no other point if you do that.</p>
          </div>

        <div className="bg-inherit my-3 text-white border p-5 md:w-full rounded-lg animate__animated animate__fadeInDown mx-auto shadow-md shadow-blue-300" >
          <p>The CTF will run from 6 pm 4th December to 8 pm 5th December. You can ask doubts in the Discord group, but no sharing flags, not that we can top you lol.</p>
          </div>

        <div className="bg-inherit my-3 text-white border p-5 md:w-full rounded-lg animate__animated animate__fadeInDown mx-auto shadow-md shadow-blue-300">
          <p>If you want, try to use AI tools or any tools you want honestly. This is a competition for cybersecurity. There is no one way to get to the answer, and there are no boundaries.</p>
          </div>
      </div>
    </main>
  );
}

export default Faq;
