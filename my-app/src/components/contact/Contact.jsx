import React, { useRef } from 'react';
 import "./contact.css";
 import { HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi"
 import { FiGithub, FiLinkedin} from "react-icons/fi";
 import emailjs from '@emailjs/browser';
 
 const Contact = () => {
     const form = useRef();
     
     const sendEmail = (e) => {
         e.preventDefault();
     
         emailjs.sendForm('service_s53x8mc', 'template_fwq8n7v', form.current, 'cXginQ40keRVEt1YV')
         e.target.reset();
     };
   
     return (
     <section className="contact section" id="contact">
         <h2 className="section__title">Let's Connect</h2>
         <span className="section__subtitle">Contact Me</span>
 
            <div className="contact__container container grid">
                <div className="contact__info">
                    <div className="contact__card">
                        <HiOutlineMail className="contact__card-icon" />
                        
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">work.namansh@gmail.com</span>
                        
                        <a href="mailto:work.namansh@gmail.com" className="contact__button">
                            Write Me{" "} 
                            <HiOutlineArrowSmRight className="contact__button-icon" />
                        </a>
                    </div>
                </div>
                <div className="contact__info">
                    <div className="contact__card">
                        <FiLinkedin className="contact__card-icon" />
                        
                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">Naman Sharma</span>
                        
                        <a href="https://www.linkedin.com/in/naman-sharma-57734199/" className="contact__button">
                            Connect{" "} 
                            <HiOutlineArrowSmRight className="contact__button-icon" />
                        </a>
                    </div>
                </div>
                <div className="contact__info">
                    <div className="contact__card">
                        <FiGithub className="contact__card-icon" />
                        
                        <h3 className="contact__card-title">GitHub</h3>
                        <span className="contact__card-data">Lightning-01</span>
                        
                        <a href="https://www.github.com/Lightning-01" className="contact__button">
                            Explore{" "} 
                            <HiOutlineArrowSmRight className="contact__button-icon" />
                        </a>
                    </div>
                </div>
            </div>
     </section>
   );
 }
 
 export default Contact;