import React from 'react';
import { FaCode, FaSearch, FaLock, FaDesktop, FaUndo, FaMobile, FaCog, FaPython } from 'react-icons/fa';
const skills = ['Forensics', 'OSINT', 'Crypto', 'Web', 'Reversing', 'Pwn', 'Mobile', 'Misc','Python'];
function Skills() {
    return ( 
    <main className='h-screen'>
        <div id='skills' className='border rounded-lg w-3/4 p-5 my-5 flex flex-col items-center ml-4'>
            <h1 className='text-lg md:text-2xl font-bold mb-2 text-white'>Overall Team Skills</h1>
            <div className='grid grid-col-1 md:grid-cols-3 md:gap-4 gap-4'>
            {skills.map((skill, index) => (
                <div key={index} className='flex items-center w-full text-slate-400 border border-white text-center rounded-lg p-3 md:p-3'>
                {renderIcon(skill)} {/* Rendering the appropriate icon based on skill */}
                <span className='ml-2'>{skill}</span>
                </div>
            ))}
            </div>
        </div>
      </main>
     );
}
const renderIcon = (skill : String) => {
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
      case 'Mobile':
        return <FaMobile className='w-8 h-8' />;
      case 'Misc':
        return <FaDesktop className='w-8 h-8' />;
      case 'Python':
        return <FaPython className='w-8 h-8' />;
      default:
        return null;
    }
  };
export default Skills;