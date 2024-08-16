"use client";
import { LayoutGridDemo } from "../components/LayoutGridDemo";
import { MainHeader } from "../components/MainHeader";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import About from "./About";
import ProjectParagraph from "../components/ProjectParagraph";
import MacBook from "../assets/Website Revamp Photos/photos/MacCut.png";

export default function HomePage() {
  return (
    <div>
    

      <div className=" flex h-screen">
        <MainHeader />
        <KeyboardArrowDownIcon 
          sx={{ 
            color: 'white', 
            fontSize: '2rem',
            cursor: 'pointer',
          }} 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4" 
        />
      </div>
      <About />
      <LayoutGridDemo />
      <div className="flex justify-center items-center h-screen">
        <div className="w-[70%] flex flex-col md:flex-row items-center justify-center " >
          <ProjectParagraph 
            header="Hospital Kiosk" 
            paragraph="This is a web application for a hospital
            that allows people to find paths, request different services,
            and view information about the hospital. It was built using React,
            Utilized Docker containers for deployment, and AWS EC2 instances for temporary
            hosting"
            buttonText="Github Repo"
            buttonLink="https://google.com"
          />
          <img src={MacBook} alt="MacBook" className="w-full md:w-[40vw] h-auto md:h-[50vh]"  />
        </div>
      </div>
    </div>
  );
}