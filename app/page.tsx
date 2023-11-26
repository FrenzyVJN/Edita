"use client";
import Team from './team';
import Skills from './skills';
import Main from './home';
import Header from './header';
function Home() {
  return (
    <main className='bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 animate-movingBg min-h-screen'>
        <div className='w-fit'>
          <Header />
          <Main />
          <Team />
          <Skills />
        </div>
    </main>
  );
}
export default Home;