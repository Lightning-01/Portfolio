import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
        <div className="project__head">
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
        </div>
        <span className="project__content">{item.content}</span>
        <a href={item.link} className="project__button">
            Visit <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
    </div>
  );
};

export default ProjectItems;
