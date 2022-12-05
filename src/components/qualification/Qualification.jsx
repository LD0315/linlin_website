import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
       <section className="qualification section">
           <h2 className="section__title">Qualification</h2>
           <span className="section__subtitle">My personel journey</span>

           <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={
                        toggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                </div>

                <div 
                    className={
                        toggleState === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                   </div>
            </div>

            <div className="qualification__sections">
                <div 
                    className={
                        toggleState === 1 
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                        }
                    >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Education</h3>
                            <span className="qualification__subtitle">Sophia University - Tokyo</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2012 - 2016
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Information Technology</h3>
                            <span className="qualification__subtitle">University Of Queensland - Brisbane</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Education3</h3>
                            <span className="qualification__subtitle"></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line"></div>
                        </div>
                    </div>
                </div>
                <div 
                    className={
                        toggleState === 2 
                          ? "qualification__content qualification__content-active"
                          : "qualification__content"
                        }
                     >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Developer1</h3>
                                <span className="qualification__subtitle">Icemedia</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
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
                                <h3 className="qualification__title">Full Stack Developer2</h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Developer3</h3>
                                <span className="qualification__subtitle">Icemedia</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full Stack Developer4</h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
       </section>
    );
};

export default Qualification