"use client";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Experience",
    description:
      "Over the summer of 2024 I had the opportunity to intern at Collins Aerospace in VT, for Software Engineering mainly utilizing Python for data analytics and LabVIEW for embedded programming. I learned a lot about electrical engineering as well, as one of the projects I focused on was primary focused on being able to understand circuits on a unit from a customer. Also during the school year I work as a CMS assistant for my universities website!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Experience
      </div>
    ),
  },
  {
    title: "Leadership",
    description:
      "I am a member of SASE, Society of Asian Scientists and Engineers, and I was an Events Coordinator for my universities chapter. With this I planned and managed events of over 100 attendees and planned professional development conference trips. I am also currently a Project Manager, leading a small team for our Pan Asian Committee for planning an annual festival.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Skills",
    description:
      "I have learned a variety of languages from when I started programming. These include, Java, Python, JavaScript, Type Script, SQL, and C/C++. Those are the primary ones I have done work in but I have learned others. I also use a variety of development tools to help me with my projects such as, React, Github, AWS, and Figma. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Skills
      </div>
    ),
  },
  {
    title: "Future Projects and Work",
    description:
      "I am currently seeking a Summer ‘25 internship in Software Engineering, Data Analytics, or Project Management. I want to grow as an individual in these fields to be able to make a meaningful impact.I am currently making mock-ups in Figma of a future project of a GPT-powered finance partner that will help you plan out what you need to help you achieve your goals..",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Future Projects and Work
      </div>
    ),
  },
];


export function ExperienceScroll() {
  return (
    <div className="pt-10 pb-10">
      <StickyScroll  content={content} />
    </div>
  );
}
