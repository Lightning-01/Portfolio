import React from "react";
import "./education.css";
import { HiOutlineAcademicCap, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    
    return (
    <section className="qualification section">
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button button--flex qualification__active">
                    <HiOutlineAcademicCap className="qualification__icon" />
                    Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">IIT Guwahati</h3>
                                <div className="education__content">
                                    <span className="qualification__subtitle">B.Tech</span>
                                    <span className="qualification__subtitle">Major: Civil Engineering</span>
                                    <span className="qualification__subtitle">Minor: Mathematics & Computing</span>
                                </div>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2022-2026
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">CBSE Board</h3>
                            <div className="education__content">
                                <span className="qualification__subtitle">Senior Secondary</span>
                            </div>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2021-2022
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">CBSE Board</h3>
                            <div className="education__content">
                                <span className="qualification__subtitle">Secondary</span>
                            </div>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2019-2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  );
}

export default Qualification;