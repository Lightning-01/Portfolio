import React from "react";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Machine Learning & Data Science</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiOutlineCheckBadge />
            <div>
              <h3 className="skills__name">Languages and Tools</h3>
              <span className="skills__level">
                NumPy, Pandas, Scikit-learn, TensorFlow, Keras
              </span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineCheckBadge />
            <div>
              <h3 className="skills__name">Data Visualization</h3>
              <span className="skills__level">
                Matplotlib, Seaborn, Power BI
              </span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineCheckBadge />
            <div>
              <h3 className="skills__name">
                Data Preprocessing, Feature Engineering
              </h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
          <HiOutlineCheckBadge />
          <div>
            <h3 className="skills__name">Time-Series Analysis</h3>
            <span className="skills__level">LSTM, Financial Modeling</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
