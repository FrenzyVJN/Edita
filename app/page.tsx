import Image from 'next/image'

function Home() {
  return ( 
    <main className='bg-black w-screen h-screen'>
      <div>
      <div className='flex mx-auto py-3 shadow-lg px-3 shadow-white border rounded-xl h-fit gap-5 border-white w-fit'>
        <h1 className='text-white text-xl font-bold'>Home</h1>
        <h1 className='text-white text-xl font-bold'>WriteUps</h1>
        <a href='https://frenzyvjn.tech/'>
          <h1 className='text-white text-xl font-bold'>About me</h1>
        </a>
      </div>
      </div>
    </main>
   );
}

export default Home;
