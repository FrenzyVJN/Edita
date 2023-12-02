import React from 'react';
import fs from 'fs';
import path from 'path';

const MyComponent = () => {
  const filePath = path.join(process.cwd(), '/app/starter', 'mycontent.html');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  return (
    <main className='bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 animate-movingBg min-h-screen text-white'>
      <div dangerouslySetInnerHTML={{ __html: fileContent }} />
    </main>
  );
};

export default MyComponent;
