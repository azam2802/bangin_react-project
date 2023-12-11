import React from "react";
import "./Section5.css";
import LogoBig from '../../../img/logo-big.svg'
import Sponsor1 from '../../../img/sponsor1.png'
import Sponsor2 from '../../../img/sponsor2.png'

const Section5 = () => {
  return (
    <div className="Section5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="blur-circle"></div>
			<p>Testimonial</p>
            <h1>What people say about us.</h1>
          </div>
          <div className="col-6">
            <div className="review">
              <p>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
			  <h3>Mike Taylor</h3>
			  <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>
		<div className="sponsors">
			<img src={LogoBig} alt="Logo" />
			<img src={Sponsor1} alt="Sponsor1" />
			<img src={Sponsor2} alt="Sponsor2" />
		</div>
      </div>
    </div>
  );
};

export default Section5;
