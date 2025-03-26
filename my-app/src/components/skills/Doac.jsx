import React from "react";
 import { HiOutlineCheckBadge } from "react-icons/hi2";
 
 const Frontend = () => {
     return (
         <div className="skills__content">
             <h3 className="skills__title">DevOps and Cloud</h3>
             <div className="skills__box">
                 <div className="skills__group">
                     <div className="skills__data">
                         <HiOutlineCheckBadge />
                         <div>
                             <h3 className="skills__name">CI/CD Pipelines</h3>
                             {/* <span className="skills__level">Basic</span> */}
                         </div>
                     </div>
                     <div className="skills__data">
                         <HiOutlineCheckBadge />
                         <div>
                             <h3 className="skills__name">Docker</h3>
                             {/* <span className="skills__level">Intermediate</span> */}
                         </div>
                     </div>
                     <div className="skills__data">
                         <HiOutlineCheckBadge />
                         <div>
                             <h3 className="skills__name">Cloud Platforms</h3>
                             <span className="skills__level">AWS / GCP</span>
                         </div>
                     </div>
                     <div className="skills__data">
                         <HiOutlineCheckBadge />
                         <div>
                             <h3 className="skills__name">Version Control</h3>
                             <span className="skills__level">Git, GitHub</span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     );
 }
 
 export default Frontend;