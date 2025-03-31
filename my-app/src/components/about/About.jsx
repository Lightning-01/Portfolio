import React from "react";
import "./about.css";
import Education from './Education';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">A short introduction</span>
            <div className="about__container container grid">
                <div className="about__education">
                    <Education />
                </div>

                <div className="about__content">
                    <p className="about__description">
                        Hi, I'm Naman Sharma, a 3rd year undergraduate student at IIT Guwahati. While my academic foundation is in civil engineering, my passion has led me toward software development, machine learning, and finance.
                    </p>
                    
                    <p className="about__description">
                        I thrive on solving complex problems and building meaningful solutions. My academic journey at IIT Guwahati has provided me with a strong analytical foundation, while my self-driven exploration of programming and data science has shaped my technical interests.
                    </p>
                    
                    <p className="about__description">
                        What drives me is the opportunity to create impactful applications that solve real-world challenges. I'm particularly fascinated by the intersection of technology and finance, which has inspired several of my independent projects.
                    </p>

                    <p className="about__description">
                    When I'm not coding or working on projects, I enjoy playing tennis occasionally to stay active. I also spend my free time listening to music, playing video games, watching movies, and reading books. These diverse interests help me maintain a balanced lifestyle while staying creative and refreshed.
                    </p>
                </div>
                
            </div>
        </section>
    );
}

export default About;