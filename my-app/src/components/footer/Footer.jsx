import React from 'react';
 import "./footer.css";
 import { FiGithub, FiLinkedin } from 'react-icons/fi';
 import { HiOutlineMail } from "react-icons/hi";

 
 const Footer = () => {
   return (
     <footer className="footer">
         <div className="footer__container container">
             <h1 className="footer__title">Naman</h1>
             <ul className="footer__list">
                 <li>
                     <a href="#home" className="footer__link">Home</a>
                 </li>
                 <li>
                     <a href="#skills" className="footer__link">Skills</a>
                 </li>
                 <li>
                     <a href="#portfolio" className="footer__link">Portfolio</a>
                 </li>
             </ul>
             <div className="footer__social">
                 <a href="mailto:work.namansh@gmail.com" className="home__social-icon" target="_blank" rel="noreferrer">
                     <HiOutlineMail />
                 </a>
                 <a href="https://www.github.com/Lightning-01" className="home__social-icon" target="_blank" rel="noreferrer">
                     <FiGithub />
                 </a>
                 <a href="https://www.linkedin.com/in/naman-sharma-57734199/" className="home__social-icon" target="_blank" rel="noreferrer" >
                     <FiLinkedin />
                 </a>    
             </div>
             <span className="footer__copy"></span>
         </div>
     </footer>
   );
 }
 
 export default Footer;