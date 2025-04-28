import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/todoist.png';
import Portfolio2 from '../../assets/trafficIssue.png';
import Portfolio3 from '../../assets/Homorax.png';
import Portfolio4 from '../../assets/LinkedinClone.png';
import Portfolio5 from '../../assets/Shopnetic.jpeg';
import Portfolio6 from '../../assets/portfolio-7.png';

const projects = [
    {
        img: Portfolio1,
        title: "Todoist Clone",
        description: "A productivity app to manage your tasks efficiently.",
        github: "https://github.com/Ankit1141192/todoistConstructWeak",
        deploy: "https://bright-cendol-1e0307.netlify.app",
        techStack: ["HTML", "CSS", "JavaScript","LocalStorage","github"]
    },
    {
        img: Portfolio2,
        title: "TraffIssue",
        description: "A platform for citizens to report traffic problems.",
        github: "https://github.com/Sadafff19/Team_4347_hackathon",
        deploy: "https://4347-hackthon.netlify.app",
        techStack: ["HTML", "CSS", "JavaScript","LocalStorage","github"]
    },
    {
        img: Portfolio4,
        title: "LinkedIn Clone",
        description: "A social networking app inspired by LinkedIn.",
        github: "https://github.com/Ankit1141192/cunstructWeakProject",
        deploy: "#",
        techStack: ["Html", "JavaScrript","CSS", ":LocalStorage","github" ]
    }
    ,{
        img: Portfolio6,
        title: "Quick Stay",
        description: "A hotel booking platform with a user-friendly interface.",
        github: "https://github.com/Ankit1141192/QuickStay",
        deploy:"https://quick-stay-xi.vercel.app/",
        techStack: ["React+Vite", "TailwindCSS","clerkAuth","github"]

    },
    {
        img: Portfolio3,
        title: "Homorax",
        description: "An ecommerce platform for modern shopping experiences.",
        github: "https://github.com/Ankit1141192/The-Coding-Crusaders",
        deploy: "#",
        techStack: ["React", "CSS", "ChakraUi", "FirebaseAuthuntication","github"]
    },
   
    {
        img: Portfolio5,
        title: "Shopnetic",
        description: "A mobile-friendly online store with advanced features.",
        github: "https://github.com/Ankit1141192/ReactNativeProject",
        deploy: "#",
        techStack: ["React Native", "JavaScript", "Expo","FirebaseAuth","AsyncStorage","github"]
    }
    
];

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">
    Explore a collection of my professional projects demonstrating practical problem-solving and technical expertise.
</span>

            <div className="worksImgs">
                {projects.map((project, index) => (
                    <div key={index} className="projectCard">
                        <img src={project.img} alt={project.title} className="worksImg" />
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <div className="techStack">
                            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                        </div>
                        <div className="buttonGroup">
                            <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="btn">Deploy</a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
