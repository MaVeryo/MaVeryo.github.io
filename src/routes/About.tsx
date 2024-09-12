import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import ParagraphLayout from '../components/ParagraphLayout';
import MahitPhoto from '../assets/Website Revamp Photos/photos/me.png';
import SecondaryButton from '../components/SecondaryButton';

export default function About() {
  return (
    <div className="max-w-fit mx-auto overflow-hidden lg:flex md:items-center">
      <div className="flex flex-col lg:flex-row lg:items-center justify-center">
        <div className="lg:w-1/2 pl-14 lg:p-20 lg:pl-40">
          <ParagraphLayout
            header="Hi, I'm Mahit"
            paragraph="I am a Junior studying at Worcester Polytechnic Institute. 
            I am majoring in Computer Science and Data Science with a passion for 
            Software Engineering and Project Management. I am seeking a Summer ‘25 Internship in these fields."
            paragraph2='In my free time I enjoy lifting, fishing, golf, motor sports, and gaming. 
            I am currently learning photography and growing my portfolio. Feel free to message me about anything! '
          />
          
          <PrimaryButton text="Photography" link="test" />
          <br/>
          <br/>
          <SecondaryButton text="Contact Me" link="test" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img 
            src={MahitPhoto} 
            alt="Mahit Photo" 
            className="w-[80vw] h-[50vh] sm:w-[50vw] sm:h-[75vh] object-contain" 
          />
        </div>
      </div>
    </div>
  );
}