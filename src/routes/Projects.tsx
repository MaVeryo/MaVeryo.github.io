import ProjectParagraph from '../components/ProjectParagraph';


export default function Projects() {
  return (
    <section>
    <div>
    <section>
    <ProjectParagraph header="Personal Portfolio V2" 
    paragraph="I made this personal portfolio to showcase
    my UI design and passion for web development. It was built using React, TypeScript, and Tailwind CSS.
    I also used Aceternity to support the front-end. This is my second version of my portfolio. The first version was built using HTML, CSS, and JavaScript.
    With new technologies I learn from class or self-taught, I decided to revamp my portfolio to showcase my new skills."
    buttonText="Github Repo"
    buttonLink="https://github.com/MaVeryo/maveryowebpage"
    phone={true}/>
    </section>

    <section>
    <ProjectParagraph header="Database Operations" 
    paragraph="In this Python project, my team and I used Jupyter Notebook and Pandas to analyze databases, focusing on Crypto Currencies. 
    We cleaned and organized the data, examined distribution, trends, and correlation, and calculated various values like P-Value and F-Statistic. 
    The project helped me learn teamwork, professional speaking, pitching ideas, and using Pandas for data analysis"
    phone={true}/>
    </section>

    <section>
    <ProjectParagraph header="Web Search Bot" 
    paragraph="I created a Java 'shop bot' for a class project to simplify online shopping. 
    sing a 3-letter prefix and the item name, it quickly directed me to top shops for the desired item. 
    Although the visual display was not fully implemented, testing with students showed a 10% increase 
    in speed for finding items. Unfortunately, the code was later deleted as it was associated with 
    my former high school account on a website."
    phone={true}/>
    </section>
    

    </div>
    </section>
  );
}