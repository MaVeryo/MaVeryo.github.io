import ProjectParagraph from '../components/ProjectParagraph';


export default function Projects() {
  return (
    <div>
        <section>
    <ProjectParagraph header="Hospital Kiosk" 
    paragraph="This is a web application for a hospital
    that allows people to find paths, request different services,
    and view information about the hospital. It was built using React,
    Utilized Docker containers for deployment, and AWS EC2 instances for temporary
    hosting."
    buttonText="Github Repo"
    buttonLink="https://google.com"
    phone={true}/>
    </section>

    <section>
    <ProjectParagraph header="Hospital Kiosk" 
    paragraph="This is a web application for a hospital
    that allows people to find paths, request different services,
    and view information about the hospital. It was built using React,
    Utilized Docker containers for deployment, and AWS EC2 instances for temporary
    hosting."
    buttonText="Github Repo"
    buttonLink="https://google.com"
    phone={true}/>
    </section>

    <section>
    <ProjectParagraph header="Hospital Kiosk" 
    paragraph="This is a web application for a hospital
    that allows people to find paths, request different services,
    and view information about the hospital. It was built using React,
    Utilized Docker containers for deployment, and AWS EC2 instances for temporary
    hosting."
    buttonText="Github Repo"
    buttonLink="https://google.com"
    phone={true}/>
    </section>

    </div>
  );
}