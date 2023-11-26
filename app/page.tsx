"use client";
import Image from 'next/image';
import { Typewriter } from "react-simple-typewriter";
import frenzyImage from './frenzy.png';
import prajeshImage from './prajesh.png';
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord, FaCode, FaSearch, FaLock, FaDesktop, FaUndo, FaMobile, FaCog, FaPython } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

function Home() {
  const teamMembers = [
    { name: 'FrenzyVJN', role: 'CTF, Web Developer' },
    { name: 'DrunkenCloud', role: 'CTF' },
    { name: 'hotaru', role: 'Graphic Designer' },
  ];
  const socialMedias1 = [
    {
      href: 'mailto:vjn@frenzyvjn.tech',
      ariaLabel: 'Compose an email to FrenzyVJN',
      title: 'Write an Email to FrenzyVJN',
      Icon: FaEnvelope,
    },
    {
      href: 'https://www.linkedin.com/in/vijayan-sankar/',
      ariaLabel: 'Goes to Vijayan Sankar\'s LinkedIn profile',
      title: 'LinkedIn Profile',
      Icon: FaLinkedin,
    },
    {
      href: 'https://github.com/FrenzyVJN',
      ariaLabel: 'Goes to FrenzyVJN\'s GitHub profile',
      title: 'GitHub Profile',
      Icon: FaGithub,
    },
    {
      href: 'https://discord.com/users/813371659738021919',
      ariaLabel: 'Goes to FrenzyVJN\'s Discord profile',
      title: 'Discord Profile',
      Icon: FaDiscord,
    },
  ];
  const socialMedias2 = [
    {
      href: 'mailto:vjn@frenzyvjn.tech',
      ariaLabel: 'Compose an email to hotaru',
      title: 'Write an Email to hotaru',
      Icon: FaEnvelope,
    },
    {
      href: 'https://www.linkedin.com/in/prajesh-raam/',
      ariaLabel: 'Goes to Vijayan Sankar\'s LinkedIn profile',
      title: 'LinkedIn Profile',
      Icon: FaLinkedin,
    },
    {
      href: 'https://github.com/hotaru-hspr',
      ariaLabel: 'Goes to hotaru\'s GitHub profile',
      title: 'GitHub Profile',
      Icon: FaGithub,
    },
    {
      href: 'https://discord.com/users/528963356082700289',
      ariaLabel: 'Goes to hotaru\'s Discord profile',
      title: 'Discord Profile',
      Icon: FaDiscord,
    },
  ];

  const skills = ['Forensics', 'OSINT', 'Crypto', 'Web', 'Reversing', 'Pwn', 'Mobile', 'Misc','Python'];

  const works = [
    { title: 'Project A', description: 'Lorem ipsum dolor sit amet.' },
    { title: 'Project B', description: 'Consectetur adipiscing elit.' },
    { title: 'Project C', description: 'Sed do eiusmod tempor incididunt.' },
  ];

  const references = [
    { name: 'Client A', company: 'Company A', contact: 'contact@companya.com' },
    { name: 'Client B', company: 'Company B', contact: 'contact@companyb.com' },
  ];

  const ctfParticipation = 5;
  const ctfResults = {
    victories: 3,
    draws: 1,
    losses: 1,
  };

  return (
    <main className='bg-gradient-to-b from-slate-950 via-slate-700 to-slate-950 animate-movingBg w-fit md:w-screen lg:w-screen xl:w-screen min-h-screen'>
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
    offset={-70} // Adjust the offset based on your layout
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

        <div className='w-fit py-10 md:ml-32 mt-10'>
          {/* About Our Team Section */}
          <div id='home' className='text-white text-xl p-4'>
            <h1></h1>
            <p></p>
            <h1 className="w-fit md:fit xl:w-fit xl:text-start text-4xl sm:w-fit sm:text-6xl lg:text-8xl font-bolt text-textPrimary uppercase">
              We are
              <br />
              <span className="text-blue-300">
                  <Typewriter
                    words={["Hackers", "Developer", "CTF Players","Bug Bounty Hunters"]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={250}
                    deleteSpeed={150}
                    loop
                  />
              </span>
            </h1>
          </div>
          <div id='our-team' className='text-white text-xl p-4'>
            <h1></h1>
            <p></p>
            <h1 className="w-fit md:fit xl:w-fit xl:text-start text-4xl sm:w-fit sm:text-6xl lg:text-6xl font-bolt text-textPrimary uppercase">
              Our Team
            </h1>
            <div className='border rounded-lg w-fit p-5 my-5 flex items-center'>
              <Image className='rounded-full border border-black' src={frenzyImage} alt="FrenzyVJN" width={100} height={100} />
              <div className='ml-4'>
              <a href='https://frenzyvjn.tech/' target="_blank" rel="noopener noreferrer">
                <h1 className='md:text-xl text-md'>FrenzyVJN</h1>
              </a>
                <h1 className='text-slate-400 md:text-lg text-sm'>Fullstack developer specializing in frontend engineering</h1>
                <section className="w-full md:w-2/3 lg:w-1/2">
                  <div className="flex items-center mt-2">
                    {socialMedias1.map((socialMedia1, index) => (
                      <a
                        key={index}
                        href={socialMedia1.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={socialMedia1.ariaLabel}
                        title={socialMedia1.title}
                        className="text-white mr-4"
                      >
                        <socialMedia1.Icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </section>
              </div>

            </div>
            <div className='border rounded-lg w-fit p-5 my-5 flex items-center'>
              <Image className='rounded-full border border-black' src={prajeshImage} alt="hotaru" width={100} height={100} />
              <div className='ml-4'>
                <a href='https://hoshi-pro.tech/' target="_blank" rel="noopener noreferrer">
                  <h1 className='md:text-xl text-md'>hotaru</h1>
                </a>
                <h1 className='text-slate-400 md:text-lg text-sm'>Graphics designer, Frontend dev and aspiring game dev. Part-time grass toucher.</h1>
                <section className="w-full md:w-2/3 lg:w-1/2">
                  <div className="flex items-center mt-2">
                    {socialMedias2.map((socialMedia2, index) => (
                      <a
                        key={index}
                        href={socialMedia2.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={socialMedia2.ariaLabel}
                        title={socialMedia2.title}
                        className="text-white mr-4"
                      >
                        <socialMedia2.Icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </section>
              </div>
            </div>
            <div className='border rounded-lg w-fit p-5'>
              <h1>DrunkenCloud</h1>
              <h1 className='text-slate-400'>Will be updated soon...</h1>
            </div>
          </div>
            {/* Overall Team Skills Section */}
            <div id='skills' className='border rounded-lg w-3/4 p-5 my-5 flex flex-col items-center ml-4'>
              <h1 className='text-lg md:text-2xl font-bold mb-2 text-white'>Overall Team Skills</h1>
              <div className='grid grid-col-1 md:grid-cols-3 md:gap-4 gap-4'>
                {skills.map((skill, index) => (
                  <div key={index} className='flex items-center w-full text-slate-400 border sm:w-fit border-white text-center rounded-lg p-3 md:p-3'>
                    {renderIcon(skill)} {/* Rendering the appropriate icon based on skill */}
                    <span className='ml-2'>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}

// Function to render the appropriate icon based on skill
const renderIcon = (skill : String) => {
  switch (skill) {
    case 'Forensics':
      return <FaSearch className='w-6 h-6' />;
    case 'OSINT':
      return <FaDesktop className='w-6 h-6' />;
    case 'Crypto':
      return <FaLock className='w-6 h-6' />;
    case 'Web':
      return <FaCode className='w-6 h-6' />;
    case 'Reversing':
      return <FaUndo className='w-6 h-6' />;
    case 'Pwn':
      return <FaCog className='w-6 h-6' />;
    case 'Mobile':
      return <FaMobile className='w-6 h-6' />;
    case 'Misc':
      return <FaDesktop className='w-6 h-6' />;
    case 'Python':
      return <FaPython className='w-6 h-6' />;
    default:
      return null;
  }
};

export default Home;