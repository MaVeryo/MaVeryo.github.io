"use client";
import React, { useRef } from 'react';

import { LayoutGridDemo } from "../components/LayoutGridDemo";
import { MainHeader } from "../components/MainHeader";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import About from "../components/AboutHomePage";
import ProjectParagraph from "../components/ProjectParagraph";
import BigButton from "../components/BigButton";
import { ResumeExperience } from "../components/ResumeExperience";

export default function HomePage() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  // Scroll handler
  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="">
    
      <section>
      <div className="flex h-screen">
        <MainHeader />

        <KeyboardArrowDownIcon 
          sx={{ 
            color: 'white', 
            fontSize: '2rem',
            cursor: 'pointer',
          }} 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
          onClick={scrollToNextSection}
        />
      </div>
      </section>

      <section>
      <div className="sm:p-20" ref={nextSectionRef} id="about">
      <About />
      </div>
      </section>

      <section>
      <div className="w-full mt-14 grid p-20 pb-20">
      <ResumeExperience/>      
      </div>
      </section>


          
          <div className="p-20">
            <section>
            <div className="pt-28 sm:pt-0">
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
            </div>
            </section>

            <section>
            <div className="mt-28 sm:-mt-28 pt-0">
              <ProjectParagraph 
                header="ChordStorm" 
                paragraph="This web application integrates the Spotify API and OpenAI API to create a personalized music experience. 
                It fetches the weather in your location, and with the help of a GPT-powered music assistant, 
                suggests songs tailored to the current weather and your music preferences. "
                buttonText="Github Repo"
                buttonLink="https://google.com"
                phone={false}
              />
          </div>
          </section>
          
         
        <div className="max-w-screen flex justify-center -mt-16 sm:-mt-28">
         <BigButton text="More Projects" link="/"/>
         </div>
         </div>

         <section>
         <div className="p-20 pb-16">
        <LayoutGridDemo />
          <div className="flex justify-center items-center h-1">
            <BigButton text="Photography Portfolio" link="https://google.com" />
          </div>
      </div>
      </section>
    </div>
  );
}