//import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { Box } from "@mui/material";

export function MainHeader() {
  const words = ["Software Engineer", "Photographer", "Data Analyst"];


  return (
    <Box>
      <div className={`h-[70vh] flex justify-center items-center sm:pl-28 lg:pl-96 pl-14`}>
        <div className={`text-white mx-auto font-normal`}>
          <div>
            <h1 className={`opacity-15 font-light text-2xl`}> Mahit Verma</h1>
            <br />
            <div className={`flex items-center mb-4 -mt-2`}>
              <h1 className={`md:text-6xl sm:text-4xl text-4xl`}>Student</h1>
              <div className={`ml-4 overflow-hidden bg-white w-52 sm:w-72 lg:w-80 h-0.5`}></div>
            </div>
            <div className='flex'>
              <br /> 
              <p className={`sm:text-6xl text-4xl mr-1 sm:mr-3`}>+</p> 
              <FlipWords words={words} />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}