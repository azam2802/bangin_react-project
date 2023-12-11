import React from "react";
import "./Section4.css";
import Section4_card_img1 from "../../../img/Section4_card-img1.png";
import Section4_card_img2 from "../../../img/Section4_card-img2.png";
import Section4_card_img3 from "../../../img/Section4_card-img3.png";
import Section4_card_img4 from "../../../img/Section4_card-img4.png";
import Section4_card_img5 from "../../../img/Section4_card-img5.png";
import Section4_card_img6 from "../../../img/Section4_card-img6.png";
import { a } from "react-router-dom";

const Section4 = () => {
  
  return (
    <div className="Section4">
      <div className="container">
        <div className="container">
          <p>Top Selling</p>
          <h1>Waste Processing Product</h1>
          <div className="row">
            <div className="col-4">
              <a href="/product/magokits">
                <div className="card-img">
                  <img src={Section4_card_img1} alt="Section4_card-img" />
                </div>
                <div className="card-info">
                  <h3>Magokits Pack</h3>
                  <p>Rp. 150.000</p>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="/product/composingTools">
                <div className="card-img">
                  <img src={Section4_card_img2} alt="Section4_card-img" />
                </div>
                <div className="card-info">
                  <h3>Composing Tools</h3>
                  <p>Rp. 1.550.000</p>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="/product/composterFullPack">
                <div className="card-img">
                  <img src={Section4_card_img3} alt="Section4_card-img" />
                </div>
                <div className="card-info">
                  <h3>Composter Full Pack</h3>
                  <p>Rp. 300.000</p>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="/product/wasteSorters">
                <div className="card-img">
                  <img src={Section4_card_img4} alt="Section4_card-img" />
                </div>
                <div className="card-info">
                  <h3>Waste Sorters</h3>
                  <p>Rp. 15.000.000</p>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="/product/biogasStove">
                <div className="card-img">
                  <img src={Section4_card_img5} alt="Section4_card-img" />
                </div>
                <div className="card-info">
                  <h3>Biogas Stove</h3>
                  <p>Rp. 4.000.000</p>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="/product/wasteBin">
                <div className="card-img">
                  <img src={Section4_card_img6} alt="Section4_card-img" />
                </div>
                <div className="card-info">
                  <h3>Waste Bin 2in1</h3>
                  <p>Rp. 300.000</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
