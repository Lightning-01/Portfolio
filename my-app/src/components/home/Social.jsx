import React from "react";
import { FiGithub, FiLinkedin} from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";


const Social = () => {
    return (
        <div className="home__social">
            <a href="mailto:work.namansh@gmail.com" className="home__social-icon" target="_blank" rel="noreferrer">
                <HiOutlineMail />
            </a>
            <a href="https://www.github.com/Lightning-01" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/naman-sharma-57734199/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;