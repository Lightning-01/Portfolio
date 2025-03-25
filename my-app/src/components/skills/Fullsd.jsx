import React from "react";
 import { HiOutlineCheckBadge } from "react-icons/hi2";
 
 const Frontend = () => {
     return (
         <div className="skills__content">
             <h3 className="skills__title">Full Stack Development</h3>
             <div className="skills__box">
                 <div className="skills__group">
                     <div className="skills__data">
                         <HiOutlineCheckBadge />
                         <div>
                             <h3 className="skills__name">Frontend</h3>
                             <span className="skills__level">HTML, CSS, JavaScript, React.js, Bootstrap</span>
                         </div>
                     </div>
                     <div className="skills__data">
                         <HiOutlineCheckBadge />
                         <div>
                             <h3 className="skills__name">Backend</h3>
                             <span className="skills__level">Node.js, Express.js, REST APIs</span>
                         </div>
                     </div>
                     <div className="skills__data">
                         <HiOutlineCheckBadge />
                         <div>
                             <h3 className="skills__name">Database</h3>
                             <span className="skills__level">MongoDB, PostgreSQL</span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     );
 }
 
 export default Frontend;