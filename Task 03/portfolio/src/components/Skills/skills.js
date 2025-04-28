import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import CSS from "../svg/css-3.svg";
import HTML from '../svg/html-5.svg'; 
import JavaScript from '../svg/javascript.svg'; 
import TypeScript from '../svg/typescript.svg'; 
import Reactl from '../svg/react.svg';
import FireBase from "../svg/firebase.svg";
import Tailwind from "../svg/tailwind-css.svg";

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">About</span>
            <span className="skillDesc">
                Hi, I'm Ankit Kumar, an aspiring Software Developer with a strong foundation in JavaScript 
                and hands-on experience in the MERN stack. I’m passionate about building intuitive and impactful
                digital experiences. With proficiency in React, React Native, and Firebase, I specialize in creating
                seamless UI/UX interfaces and scalable applications.
            </span>

            {/* Displaying the SVG images */}
            <div className="skillIcons">
                <img src={CSS} alt="CSS 3" className="skillIcon" />
                <img src={HTML} alt="HTML 5" className="skillIcon" />
                <img src={JavaScript} alt="JavaScript" className="skillIcon" />
                <img src={TypeScript} alt="TypeScript" className="skillIcon" />
                <img src={Reactl} alt="React" className="skillIcon" />
                <img src={FireBase} alt="Firebase" className="skillIcon" />
                <img src={Tailwind} alt="Tailwind CSS" className="skillIcon" />
            </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UI/UX Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>
                            I specialize in crafting intuitive, user-friendly interfaces that provide smooth and delightful user experiences. 
                            My expertise includes wireframing, prototyping, and high-fidelity UI designs, ensuring your product is both functional and visually appealing.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Website Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>
                            I create responsive and modern websites tailored to your needs, ensuring they look great across all devices. 
                            From designing aesthetically pleasing layouts to implementing interactive elements, I focus on both form and function to enhance user engagement.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="App Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>
                            I design mobile applications with an emphasis on user-centric design and usability. 
                            Whether it's an Android or iOS app, I focus on creating interfaces that are not only visually appealing but also intuitive and easy to navigate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
