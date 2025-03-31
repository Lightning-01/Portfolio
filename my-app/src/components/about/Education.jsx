import React from "react";
import "./education.css";
import { HiOutlineAcademicCap, HiOutlineCalendar } from "react-icons/hi";

const Education = () => {
    return (
        <div className="education__container">
            <div className="education__tabs">
                <div className="education__button button--flex education__active">
                    <HiOutlineAcademicCap className="education__icon" />
                    Education
                </div>
            </div>

            <div className="education__sections">
                <div className="education__content education__content-active">
                    <div className="education__data">
                        <div>
                            <h3 className="education__title">IIT Guwahati</h3>
                            <div className="education__content">
                                <span className="education__subtitle">B.Tech</span>
                                <span className="education__subtitle">Major: Civil Engineering</span>
                                <span className="education__subtitle">Minor: Mathematics & Computing</span>
                                <span className="education__subtitle">CGPA : 7.91</span>
                            </div>
                            <div className="education__calendar">
                                <HiOutlineCalendar className="education__calendar-icon" />
                                2022-2026
                            </div>
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                    <div className="education__data">
                        <div></div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                        <div>
                            <h3 className="education__title">CBSE Board</h3>
                            <div className="education__content">
                                <span className="education__subtitle">Senior Secondary</span>
                                <span className="education__subtitle">95.2 %</span>
                            </div>
                            <div className="education__calendar">
                                <HiOutlineCalendar className="education__calendar-icon" />
                                2021-2022
                            </div>
                        </div>
                    </div>
                    <div className="education__data">
                        <div>
                            <h3 className="education__title">CBSE Board</h3>
                            <div className="education__content">
                                <span className="education__subtitle">Secondary</span>
                                <span className="education__subtitle">96.5 %</span>
                            </div>
                            <div className="education__calendar">
                                <HiOutlineCalendar className="education__calendar-icon" />
                                2019-2020
                            </div>
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;