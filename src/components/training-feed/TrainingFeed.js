import React from "react";
import { Link } from "react-router-dom";
import "./TrainingFeedStyles.css";

import Moon from '../../assets/moon.jpg'
import Pod from '../../assets/pod.jpg'

const TrainingFeed = () => {
  return (
    <div className="main_section">
    {/* left section */}
      <div className="left_section">
        <h1>Training</h1>
        <p>
          Full comperhensive training to for all what you need to be safe on
          board while you are enjoying your once in life time trip.
        </p>
        <Link to="./contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      
      {/* right section */}
      <div className="right_section">
        <div className="img-container">
          <div className="image-stack top">
            <img  src={Moon} className="img" alt=''/>
          </div>
          <div className="image-stack bottom">
            <img  src={Pod} className="img" alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingFeed;
