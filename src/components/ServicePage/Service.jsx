import React from "react";
import Header from "../Header/Header";
import "./Service.css";
import Flow_way1 from "../../img/flow-way1.svg";
import Flow_way2 from "../../img/flow-way2.svg";
import Flow_way3 from "../../img/flow-way3.svg";
import Flow_way4 from "../../img/flow-way4.svg";
import Flow_way5 from "../../img/flow-way5.svg";
import news1_img from "../../img/Prinsip-Pengolahan-Limbah-yang-Baik-Bagi-Lingkungan-min.png";
import news2_img from "../../img/webinar pengelolaan.png";
import news3_img from "../../img/strategi pengelolaan sampah.png";

const Service = () => {
  return (
    <div className="Service">
      <section>
        <div className="container">
          <Header />
          <div className="title">
            <h3>Information & Education</h3>
            <h1>Waste Flow</h1>
          </div>
          <div className="waste-flow">
            <div className="col-2">
              <img src={Flow_way1} alt="Flow_ways" />
              <p>Waste Segregation by Clients</p>
            </div>
            <div className="col-2">
              <img src={Flow_way2} alt="Flow_ways" />
              <p>Waste Storage at Client's Warehouse/ Shop/ Hous</p>
            </div>
            <div className="col-2">
              <img src={Flow_way3} alt="Flow_ways" />
              <p>Segregated Waste Collection</p>
            </div>
            <div className="col-2">
              <img src={Flow_way4} alt="Flow_ways" />
              <p>Waste Processing in W4C's Material Recovery Facility</p>
            </div>
            <div className="col-2">
              <img src={Flow_way5} alt="Flow_ways" />
              <p>Residue being Sent to the Landfill</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row row_news">
            <div className="news">
              <div className="col-4">
                <img src={news1_img} alt="news1_image" />
              </div>
              <div className="col-6">
                <h3>
                  Prinsip Pengolahan Limbah Sampah yang Baik Bagi Lingkungan
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac
                  justo massa odio facilisis vulputate ut. Libero a porta
                  malesuada tortor volutpat habitasse est in vitae. Sed
                  pellentesque aliquam a nunc neque placerat phasellus lectus
                  ac. Adipiscing nibh cursus pretium consectetur. Pellentesque
                  arcu ullamcorper odio id auctor. Sed tristique sodales fames
                  volutpat nunc mauris etiam habitant lacus.
                </p>
              </div>
            </div>
            <div className="news">
              <div className="col-4">
                <img src={news2_img} alt="news1_image" />
              </div>
              <div className="col-6">
                <h3>
                  Webinar Pengelolaan Limbah Medis Covid-19 #GenerasiRestorasi
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac
                  justo massa odio facilisis vulputate ut. Libero a porta
                  malesuada tortor volutpat habitasse est in vitae. Sed
                  pellentesque aliquam a nunc neque placerat phasellus lectus
                  ac. Adipiscing nibh cursus pretium consectetur. Pellentesque
                  arcu ullamcorper odio id auctor. Sed tristique sodales fames
                  volutpat nunc mauris etiam habitant lacus.
                </p>
              </div>
            </div>
            <div className="news">
              <div className="col-4">
                <img src={news3_img} alt="news1_image" />
              </div>
              <div className="col-6">
                <h3>
                  Strategi Pengelolaan Sampah Guna Mendukung Zero Waste To
                  Landfill
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac
                  justo massa odio facilisis vulputate ut. Libero a porta
                  malesuada tortor volutpat habitasse est in vitae. Sed
                  pellentesque aliquam a nunc neque placerat phasellus lectus
                  ac. Adipiscing nibh cursus pretium consectetur. Pellentesque
                  arcu ullamcorper odio id auctor. Sed tristique sodales fames
                  volutpat nunc mauris etiam habitant lacus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
