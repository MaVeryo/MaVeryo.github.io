import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from "@mui/material";

export function MainHeader() {
  const words = ["Software Engineer", "Photographer", "Data Analyst"];
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box>
      <div className={`h-[70vh] flex justify-center items-center ${isSmallScreen ? 'pl-4' : 'pl-[40vh]'}`}>
        <div className={`text-white ${isSmallScreen ? 'text-2xl' : 'text-4xl'} mx-auto font-normal`}>
          <div>
            <h1 className={`opacity-15 font-light ${isSmallScreen ? 'text-2xl' : 'text-3xl'}`}> Mahit Verma</h1>
            <br />
            <div className={`flex items-center mb-4 ${isSmallScreen ? '-mt-2' : '-mt-6'}`}>
              <h1 className={`${isSmallScreen ? 'text-4xl' : 'text-6xl'}`}>Student</h1>
              <div className={`ml-2 overflow-hidden bg-white ${isSmallScreen ? 'w-40' : 'w-80'} h-0.5`}></div>
            </div>
            <div className='flex'>
              <br /> 
              <p className={`${isSmallScreen ? 'text-4xl' : 'text-6xl'} mr-3`}>+</p> 
              <FlipWords words={words} />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}