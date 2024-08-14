import React from 'react';
import Navigation from '../components/Navigation';
import PrimaryButton from '../components/PrimaryButton';
import ParagraphLayout from '../components/ParagraphLayout';
import MahitPhoto from '../assets/Website Revamp Photos/photos/me.png';
import SecondaryButton from '../components/SecondaryButton';

export default function About() {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col md:flex-row items-center justify-center max-h-screen p-60 -mt-16">
        <div className="md:w-1/2 p-4 pl-40 pt-12">
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
        <div className="md:w-1/2 p-4 relative">
          <img src={MahitPhoto} alt="Mahit Photo" className="w-[40vw] h-[60vh] object-contain" />
        </div>
      </div>
    </div>
  );
}
