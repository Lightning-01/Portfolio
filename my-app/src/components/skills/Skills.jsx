import React from 'react';
 import "./skills.css";
 import Doac from './Doac';
 import Dsml from './Dsml';
 import Fullsd from './Fullsd';

 const Skills = () => {
   return (
     <section className="skills section" id="skills">
         <h2 className="section__title">Technical Skills</h2>
         <span className="section__subtitle"></span>
         <div className="skills__container container grid">
             <Doac />
             <Dsml /> 
             <Fullsd /> 
         </div>
     </section>
   );
 }
 
 export default Skills;