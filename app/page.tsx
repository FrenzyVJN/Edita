"use client";
import Image from 'next/image';
import { Typewriter } from "react-simple-typewriter";
import frenzyImage from './frenzy.png';
import prajeshImage from './prajesh.png';
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
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
    <main className='bg-gradient-to-b from-slate-950 via-slate-700 to-slate-950 animate-movingBg w-screen min-h-screen'>
      <div className='pt-8'>
        <div className='flex mx-auto py-3 shadow-lg px-3 backdrop-filter backdrop-blur-lg shadow-white border rounded-xl h-fit gap-2 md:gap-5 border-white w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-40 bg-inherit hover:bg-black duration-300 flex-wrap'>
          <div className='nav-item'>
            <a href='#home' className='text-white font-bolt text-textPrimary uppercase text-sm md:text-xl font-bold'>
              Home
            </a>
          </div>
          <div className='nav-item'>
            <a href='#our-team' className='text-white font-bolt text-textPrimary uppercase text-sm md:text-xl font-bold'>
              Team
            </a>
          </div>
          <div className='nav-item'>
            <a href='#our-skills' className='text-white font-bolt text-textPrimary uppercase text-sm md:text-xl font-bold'>
              Skills
            </a>
          </div>
          <div className='nav-item'>
            <a href='#contact-us' className='text-white font-bolt text-textPrimary uppercase text-sm md:text-xl font-bold'>
              Contact Us
            </a>
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
              <a href='https://frenzyvjn.tech/'>
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
                <a href='https://hoshi-pro.tech/'>
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
        </div>
      </div>
    </main>
  );
}

export default Home;
