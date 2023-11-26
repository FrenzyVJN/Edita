import { Typewriter } from "react-simple-typewriter";
function Main() {
    return ( 
        <main id='home' className="h-screen">
        <div className="mt-auto"></div>
        <div  className='flex mt-32 text-white text-xl p-4'>
        <h1 className="w-fit md:fit xl:w-fit xl:text-start text-4xl sm:w-fit sm:text-6xl lg:text-8xl font-bolt text-textPrimary uppercase">
          We are
          <br />
          <span className="text-blue-300">
              <Typewriter
                words={["Hackers", "Developer", "CTF Players","Bug Bounty Hunters"]}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={150}
                loop
              />
          </span>
        </h1>
        </div>
        <div className='flex mt-8 pb-3 w-48 bg-white border ' />
      
      </main>
     );
}

export default Main;