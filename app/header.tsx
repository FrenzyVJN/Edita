import { Link, animateScroll as scroll } from 'react-scroll';
function Header() {
    return ( 
        <main className="h-20 w-full">
            <div className="border w-full bg-white bg-opacity-10 fixed h-20 flex items-center">
                <h1 className="text-white text-2xl md:text-6xl font-bold md:ml-10">edita</h1>
                <div className="flex ml-auto">
                    <Link to="home" smooth={true} duration={500} offset={-500}>
                        <h1 className="text-white text-md mr-2 md:text-4xl md:mr-10 ml-auto font-bold">HOME</h1>
                    </Link>
                    <Link to="our-team" smooth={true} duration={500} offset={-70}>
                        <h1 className="text-white text-md mr-2 md:text-4xl md:mr-10 font-bold">TEAM</h1>
                    </Link>
                    <Link to='skills' smooth={true} duration={500} offset={-120}>
                        <h1 className="text-white text-md mr-2 md:text-4xl md:mr-10 font-bold">SKILLS</h1>
                    </Link>
                    <h1></h1>
                </div>
            </div>
        </main>
     );
}

export default Header;
