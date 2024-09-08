"use client";
import { LayoutGridDemo } from "../components/LayoutGridDemo";
import { MainHeader } from "../components/MainHeader";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import About from "./About";
import ProjectParagraph from "../components/ProjectParagraph";
import BigButton from "../components/BigButton";

export default function HomePage() {
  return (
    <div className="">
    

      <div className="flex h-screen">
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
      <div className="sm:p-20">
      <About />
      </div>

      <LayoutGridDemo />

  
          <ProjectParagraph 
            header="Hospital Kiosk" 
            paragraph="This is a web application for a hospital
            that allows people to find paths, request different services,
            and view information about the hospital. It was built using React,
            Utilized Docker containers for deployment, and AWS EC2 instances for temporary
            hosting."
            buttonText="Github Repo"
            buttonLink="https://google.com"
            phone={true}
          />

   
          <ProjectParagraph 
            header="ChordStorm" 
            paragraph="This web application integrates the Spotify API and OpenAI API to create a personalized music experience. 
            It fetches the weather in your location, and with the help of a GPT-powered music assistant, 
            suggests songs tailored to the current weather and your music preferences. "
            buttonText="Github Repo"
            buttonLink="https://google.com"
            phone={false}
          />
         
        <div className="max-w-screen flex justify-center">
         <BigButton text="More Projects" link="/"/>
         </div>
    </div>
  );
}