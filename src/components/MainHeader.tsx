import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function MainHeader() {
  const words = ["Software Engineer", "Photographer", "Data Analyst"];

  return (
    <div className="h-[40rem] flex justify-center items-center pl-96">
      <div className="text-4xl mx-auto font-normal text-white ">
        <h1 className="opacity-15 font-light text-3xl"> Mahit Verma</h1>
        <br />
        <div className='flex items-center mb-4 -mt-6'>
          <h1 className="text-6xl">Student</h1>
          <div className="ml-2 overflow-hidden bg-white w-80 h-0.5"></div> {/* Adjusted ml-5 to ml-2 */}
        </div>
        <div className='flex'>
          <br /> 
          <p className="text-6xl mr-3">+</p> 
          <FlipWords words={words} />
        </div>
      </div>
    </div>
  );
}