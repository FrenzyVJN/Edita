import React from 'react';
import fs from 'fs';
import path from 'path';

const MyComponent = () => {
  const filePath = path.join(process.cwd(), 'app/writeups', 'mycontent.html');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: fileContent }} />
  );
};

export default MyComponent;
