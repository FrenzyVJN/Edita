import React from 'react';

import { FaCode, FaSearch, FaLock, FaDesktop, FaUndo, FaMobile, FaCog, FaPython,} from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";


function Skills() {
  const skills = ['Forensics', 'OSINT', 'Crypto', 'Web', 'Reversing', 'Pwn', 'Misc', 'Python', 'Javascript'];

  return (
    <main className='flex justify-center items-center h-screen'>
        <div id='skills' className='flex items-center justify-center border rounded-lg flex-col p-4 w-fit h-fit'>
          <h1 className='text-lg md:text-2xl font-bold text-white pb-4'>Overall Team Skills</h1>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {skills.map((skill, index) => (
              <div key={index} className='flex items-center w-full md:w-64 text-slate-400 border border-white text-center rounded-lg p-3'>
                {renderIcon(skill)}
                <span className='ml-2 md:text-2xl text-xs'>{skill}</span>
              </div>
            ))}
          </div>
      </div>
    </main>
  );
}
const renderIcon = (skill: String) => {
  switch (skill) {
    case 'Forensics':
      return <FaSearch className='w-8 h-8' />;
    case 'OSINT':
      return <FaDesktop className='w-8 h-8' />;
    case 'Crypto':
      return <FaLock className='w-8 h-8' />;
    case 'Web':
      return <FaCode className='w-8 h-8' />;
    case 'Reversing':
      return <FaUndo className='w-8 h-8' />;
    case 'Pwn':
      return <FaCog className='w-8 h-8' />;
    case 'Misc':
      return <FaDesktop className='w-8 h-8' />;
    case 'Python':
      return <FaPython className='w-8 h-8' />;
    case 'Javascript':
      return <TbBrandJavascript className='w-8 h-8' />;
    default:
      return null;
  }
};
export default Skills;