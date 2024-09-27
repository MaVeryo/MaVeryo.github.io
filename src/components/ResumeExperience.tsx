
import { Timeline } from "../components/ui/timeline";
import Collins from "../assets/Website Revamp Photos/photos/Collins-Aerospace-Logo.png"
import WPI from "../assets/Website Revamp Photos/photos/WPI.png" 

export function ResumeExperience() {
  const data = [
    {
      title: "Experience",
      content: (
        <div>
          <p className="text-neutral-200 text-lg font-semibold mb-8 ">
            Over the summer of '24, I interned at Collins Aerospace as a Software Engineer. <br/>
            I am also currently employed part-time as a CMS Assistant by WPI
          </p>
          <div className="sm:grid sm:grid-cols-2 sm:gap-4">
            <img
              src={Collins}
              alt="Collins Aerospace"
              width={500}
              height={500}
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="text-neutral-400 text-[.8vw] font-normal mb-8">
            <li>Worked with the <b>Sustaining Test Engineering</b> Team at Collins Aerospace.</li>
            <li>Primarily focused on <b>LabVIEW</b> and learning <b>Electrical Engineering.</b></li>
            <li>Main responsibilities included <b> debugging</b> and fixing <b> test sets</b> for production units.</li>
            <li>Developed <b>Python</b> scripts to parse data from thousands of files, identifying patterns to pinpoint issues.</li>
            </div>
            <div className="text-neutral-400 text-[.8vw] font-normal mb-8">
              <li><b>CMS Assistant</b> on the Content Management Systems Team at <b> Worcester Polytechnic Institute.</b></li>
              <li>Handles tickets to support the <b> WPI website</b>, working on tasks like revamping pages and fixing broken links.</li>
              <li>Works with <b> Drupal, WordPress, and Monsido</b> to maintain the WPI website.</li>
              <li>Uses prior knowledge of <b> HTML, CSS, and JavaScript</b> to resolve issues faster and more efficiently.</li>
            </div>
            <img
              src={WPI}
              alt="WPI Logo"
              width={500}
              height={500}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Skills, Interests, and Coursework",
      content: (
        <div>
          <p className="text-neutral-200 text-lg font-semibold mb-8">
            I have a variety of skills ranging from different programming langauges to development tools and data tools. 
            I have learned these through school, work, personal projects, and self taught!
          </p>
          <p className="text-neutral-200 text-lg font-normal mb-8">
            <u>Coursework:</u> <b>Software Engineering, Algorithms, Operating Systems,</b> Social Implications of Information Processing, 
            Machine Organization and Assembly Language, Foundations of Computer Science, Data Analytsis for Decision Making, 
            Intro to Data Science, and Object Oriented Design
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-neutral-400 text-lg font-normal mb-8">
              <h1 className="font-bold mb-3">
                <b>Programming Languages</b>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-semibold">
              <ul className="list-disc pl-5">
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript/Typescript</li>
                <li>HTML/CSS</li>
              </ul>
              <ul className="list-disc pl-5">
                <li>C</li>
                <li>SQL</li>
                <li>LabVIEW</li>
              </ul>
      </div>
            </div>
            <img
              src={WPI}
              alt="WPI Logo"
              width={500}
              height={500}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          <div className="text-neutral-400 text-lg font-normal mb-8">
              <h1 className="font-bold mb-3">
                <b>Development tools</b>
              </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-semibold">
              <ul className="list-disc pl-5">
                <li>AWS</li>
                <li>Docker</li>
                <li>Linux</li>
                <li>Prisma</li>
                <li>Jira</li>
              </ul>
              <ul className="list-disc pl-5">
                <li>Express</li>
                <li>Node</li>
                <li>React</li>
                <li>Git/Github</li>
                <li>Figma</li>
              </ul>
            </div>
            </div>
            <div className="text-neutral-400 text-lg font-normal mb-8">
              <h1 className="font-bold mb-3">
                <b>Data tools</b>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-semibold">
              <ul className="list-disc pl-5">
                <li>PostgreSQL</li>
                <li>Pandas</li>
                <li>matplotlib</li>
                <li>Excel</li>
              </ul>
              <ul className="list-disc pl-5">
                <li>NumPy</li>
                <li>plotly</li>
                <li>Beautiful Soup</li>
              </ul>
            </div>
            </div>
            </div>
            
      </div>
      ),
    },
    {
      title: "Leadership Experience",
      content: (
        <div>
          <p className="text-neutral-200 text-lg font-semibold mb-10">
            Leadership Experience at WPI
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-neutral-400">
              <h1 className=" text-xl font-normal mb-8">
                <b>SASE Event's Coordinator</b>
                <br/>
                <b>Aug 2022 - Jan 2024</b>
              </h1>
              <div className="text-[90%]">
              <li>Assisted in <b>coordinating a $30,000+ conference trip</b> for 40 Asian students, with a focus on professional development</li>
              <li><b>Organized</b> weekly events for an Asian community of over 100 attendees to promote cultural inclusion</li>
              <li><b>Constructed</b> thorough itineraries for 20+ events, ensuring a memorable experience for participants</li>
              </div>
            </div>
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="text-neutral-400">
              <h1 className=" text-xl font-normal mb-8">
                <b>Pan Asian Project Manager</b>
                <br/>
                <b>Jan 2023 - Present</b>
              </h1>
              <div className="text-[90%]">
              <li><b>Spearheaded</b> a team of four to design a comprehensive floor plan for a campus-wide festival to enrich Asian culture</li>
              <li><b>Managed</b> an allocated budget of <b>$3,000</b> to ensure effective financial management and optimal utilization of resources</li>
              <li><b>Coordinated</b> efforts among eight Asian organizations, ensuring compliance with deadlines and event execution</li>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
