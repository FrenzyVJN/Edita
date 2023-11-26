function Header() {
    return ( 
        <main className="h-20 w-full">
            <div className="border w-full bg-white bg-opacity-10 fixed h-20 flex items-center">
                <h1 className="text-white text-2xl md:text-6xl font-bold md:ml-10">edita</h1>
                <div className="flex ml-auto">
                    <a href="#home">
                        <h1 className="text-white text-md mr-2 md:text-4xl md:mr-10 ml-auto font-bold">HOME</h1>
                    </a>
                    <a href="#our-team">
                        <h1 className="text-white text-md mr-2 md:text-4xl md:mr-10 font-bold">TEAM</h1>
                    </a>
                    <a href="#skills">
                        <h1 className="text-white text-md mr-2 md:text-4xl md:mr-10 font-bold">SKILLS</h1>
                    </a>
                    <h1></h1>
                </div>
            </div>
        </main>
     );
}

export default Header;
