import React, { useState } from "react";
// import "./about.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
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

            </div>
        </section>
    );
}

export default About;