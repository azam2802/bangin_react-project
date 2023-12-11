import React from "react";
import "./Section6.css";
import Map from "../../../img/Map.png";

const Section6 = () => {
  return (
    <div className="Section6">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={Map} alt="Map" />
          </div>
          <div className="col-6">
            <h3>Maps</h3>
            <h1>Find your nearest waste bank</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat
              id pharetra ultricies mauris. Eget augue at egestas et consequat
              quis ultricies. At vel aenean posuere neque a fermentum donec eros
              ut. Nullam mi egestas sed facilisis.
            </p>
            <button>Search your waste bank here!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
