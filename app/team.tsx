import Image from 'next/image';
import frenzyImage from './frenzy.png';
import prajeshImage from './prajesh.png';
import Drunken from './niranjhan.png'
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord, FaCode, FaSearch, FaLock, FaDesktop, FaUndo, FaMobile, FaCog, FaPython } from 'react-icons/fa';
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

  const socialMedias3 = [
    {
      href: 'mailto:vjn@frenzyvjn.tech',
      ariaLabel: 'Compose an email to DrunkenCloud',
      title: 'Write an Email to DrunkenCloud',
      Icon: FaEnvelope,
    },
    {
      href: 'https://www.linkedin.com/in/niranjhan-su-740b61246/',
      ariaLabel: 'Goes to Niranjhan\'s LinkedIn profile',
      title: 'LinkedIn Profile',
      Icon: FaLinkedin,
    },
    {
      href: 'https://github.com/DrunkenCloud',
      ariaLabel: 'Goes to DrunkenCloud\'s GitHub profile',
      title: 'GitHub Profile',
      Icon: FaGithub,
    },
    {
      href: 'https://discord.com/users/772123530015277076',
      ariaLabel: 'Goes to DrunkenCloud\'s Discord profile',
      title: 'Discord Profile',
      Icon: FaDiscord,
    },
  ];


function Team() {
    
    return ( 
        <main className='h-screen justify-center'>
        <div id='our-team' className='text-white text-xl p-4'>
            <h1></h1>
            <p></p>
            <h1 className="w-fit md:fit xl:w-fit xl:text-start text-4xl sm:w-fit sm:text-6xl lg:text-6xl font-bolt text-textPrimary uppercase">
              Our Team
            </h1>
            <div className='border rounded-lg p-5 my-5 flex items-center'>
              <Image className='rounded-full border border-black' src={frenzyImage} alt="FrenzyVJN" width={80} height={80} />
              <div className='ml-4'>
              <a href='https://frenzyvjn.tech/' target="_blank" rel="noopener noreferrer">
                <h1 className='md:text-xl text-sm'>FrenzyVJN</h1>
              </a>
                <h1 className='text-slate-400 md:text-lg text-xs'>Fullstack developer specializing in frontend engineering</h1>
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
                        <socialMedia1.Icon className="md:w-6 md:h-6 w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </section>
              </div>

            </div>
            <div className='border rounded-lg p-5 my-5 flex items-center'>
              <Image className='rounded-full border border-black' src={prajeshImage} alt="hotaru" width={80} height={80} />
              <div className='ml-4'>
                <a href='https://hoshi-pro.tech/' target="_blank" rel="noopener noreferrer">
                  <h1 className='md:text-xl text-sm'>hotaru</h1>
                </a>
                <h1 className='text-slate-400 md:text-lg text-xs'>Graphics designer, Frontend dev and aspiring game dev. Part-time grass toucher.</h1>
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
                        <socialMedia2.Icon className="md:w-6 md:h-6 w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </section>
              </div>

            </div>
            <div className='border rounded-lg p-5 my-5 flex items-center'>
              <Image className='rounded-full border border-black' src={Drunken} alt="FrenzyVJN" width={80} height={80} />
              <div className='ml-4'>
              <a href='/' target="_blank" rel="noopener noreferrer">
                <h1 className='md:text-xl text-sm'>DrunkenCloud</h1>
              </a>
                <h1 className='text-slate-400 md:text-lg text-xs'>Wannabe hacker and a weeb</h1>
                <section className="w-full md:w-2/3 lg:w-1/2">
                  <div className="flex items-center mt-2">
                    {socialMedias3.map((socialMedia3, index) => (
                      <a
                        key={index}
                        href={socialMedia3.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={socialMedia3.ariaLabel}
                        title={socialMedia3.title}
                        className="text-white mr-4"
                      >
                        <socialMedia3.Icon className="md:w-6 md:h-6 w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </section>
              </div>
              </div>
        </div>
        </main>
     );
}

export default Team;