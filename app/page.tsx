"use client";
import Image from 'next/image';
import { Typewriter } from "react-simple-typewriter";
import frenzyImage from './frenzy.png';
import prajeshImage from './prajesh.png';
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord, FaCode, FaSearch, FaLock, FaDesktop, FaUndo, FaMobile, FaCog, FaPython } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import Team from './team';
import Skills from './skills';
import Main from './home';
function Home() {
  return (
    <main className='bg-gradient-to-b from-slate-950 via-slate-700 to-slate-950 animate-movingBg min-h-screen'>
      <div className='pt-8'>
        <div className='flex mx-auto py-3 shadow-lg px-3 backdrop-filter backdrop-blur-lg shadow-white border rounded-xl h-fit gap-2 md:gap-5 border-white w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-40 bg-inherit hover:bg-black duration-300 flex-wrap'>
        <div className='nav-item'>
          <Link
            to='home'
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset based on your layout
            duration={500}
            className='text-white font-bolt text-textPrimary uppercase text-sm md:text-xl font-bold'
          >
            Home
          </Link>
        </div>
        <div className='nav-item'>
          <Link
            to='our-team'
            spy={true}
            smooth={true}
            offset={0} // Adjust the offset based on your layout
            duration={500}
            className='text-white font-bolt text-textPrimary uppercase text-sm md:text-xl font-bold'
          >
            Team
          </Link>
        </div>
        <div className='nav-item'>
          <Link
            to='skills'
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset based on your layout
            duration={500}
            className='text-white font-bolt text-textPrimary uppercase text-sm md:text-xl font-bold'
          >
            Skills
          </Link>
        </div>
        <div className='nav-item'>
          <Link
            to='contact-us'
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset based on your layout
            duration={500}
            className='text-white font-bolt text-textPrimary uppercase text-sm md:text-xl font-bold'
          >
            Contact Us
          </Link>
        </div>
      </div>

        <div className='w-fit py-10 mt-10'>
          <Main />
          <Team />
          <Skills />
          </div>
        </div>
    </main>
  );
}
export default Home;