import React from "react";
import "./Section1.css";
import Section1_img from "../../../img/Section1_img.svg";
import Header from "../../Header/Header";

const Section1 = () => {
  return (
    <div className="Section1">
      <div className="container">
      <Header />
        <div className="row row-section1">
          <div className="col-8">
            <h3>Hi, Folks!</h3>
            <h1>Inovation Dedication and Sustainable Solution</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat
              id pharetra ultricies mauris. Eget augue at egestas et consequat
              quis ultricies. At vel aenean posuere neque a fermentum donec eros
              ut. Nullam mi egestas sed facilisis.
            </p>
            <a href="#">
              <button>View Details</button>
            </a>
          </div>
          <div className="col-4">
            <img src={Section1_img} alt="Section1_img" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Section1;
