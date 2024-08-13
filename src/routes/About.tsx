import React from 'react';
import Navigation from '../components/Navigation';


export default function About() {
  return (
    <div>
      <Navigation />
   
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      <div className="md:w-1/2 p-4">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <img src="https://via.placeholder.com/400" alt="Placeholder" className="w-full h-auto" />
      </div>
    </div>
    </div>
  );
}
