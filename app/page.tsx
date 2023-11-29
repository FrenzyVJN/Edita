"use client";
import Team from './team';
import Skills from './skills';
import Main from './home';
import Header from './header';
import Events from './events';
function Home() {
  return (
    <main className='bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 animate-movingBg min-h-screen'>
          <Header />
          <div className='max-w-[1300px] mx-auto'>
            <Main />
            <Team />
            <Skills />
            <Events />
          </div>
    </main>
  );
}
export default Home;