import React from "react";
import Header from "../Header/Header";
import "./AboutUs.css";
import about_img1 from "../../img/about-img1.png";
import about_img2 from "../../img/about-img2.png";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <section className="about-section1">
        <div className="container">
          <header>
            <Header />
          </header>

          <div className="aboutMe-1">
            <div className="row">
              <div className="col-6">
                <img src={about_img1} alt="aboutus-img" />
              </div>
              <div className="col-6">
                <h3>About me</h3>
                <h1>Inovation Dedication and Sustainable Solution</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac
                  justo massa odio facilisis vulputate ut. Libero a porta
                  malesuada tortor volutpat habitasse est in vitae. Sed
                  pellentesque aliquam a nunc neque placerat phasellus lectus
                  ac. Adipiscing nibh cursus pretium consectetur. Pellentesque
                  arcu ullamcorper odio id auctor. Sed tristique sodales fames
                  volutpat nunc mauris etiam habitant lacus. Nulla sit purus
                  urna platea neque sed aliquam at parturient. Nisi lectus
                  convallis auctor in ultrices. Aliquet vitae cras non nunc.
                  Massa faucibus sed sit nam. Aliquam maecenas pellentesque enim
                  odio nec enim vestibulum augue. Orci commodo neque nisl in.
                  Nibh aenean eu aliquet pharetra fringilla tristique venenatis
                  arcu duis. Dolor viverra quisque volutpat erat aliquam a mi
                  mollis. Velit amet velit vestibulum imperdiet velit accumsan.
                  Feugiat amet praesent dictum non leo aenean ac leo amet.
                  Cursus nibh odio donec eu ut ultrices. Suscipit nisi odio
                  fringilla arcu consectetur lacus. Facilisis ut pharetra
                  pellentesque a faucibus nisi. Diam varius integer donec nunc
                  mi. Pharetra ipsum lobortis nulla lorem eu. Vestibulum egestas
                  vitae ut sit lectus nec. Hac et ut pellentesque urna arcu
                  egestas accumsan. Nisi morbi augue lacus maecenas. Non nunc
                  cursus fames tellus vulputate donec ac at. Velit rhoncus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
	  <section className="about-section2">
		<div className="container">
			 <div className="aboutMe-2">
            <div className="row">
              <div className="col-6">
                <h3>About me</h3>
                <h1>Goals and Objectives</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac
                  justo massa odio facilisis vulputate ut. Libero a porta
                  malesuada tortor volutpat habitasse est in vitae. Sed
                  pellentesque aliquam a nunc neque placerat phasellus lectus
                  ac. Adipiscing nibh cursus pretium consectetur. Pellentesque
                  arcu ullamcorper odio id auctor. Sed tristique sodales fames
                  volutpat nunc mauris etiam habitant lacus. Nulla sit purus
                  urna platea neque sed aliquam at parturient. Nisi lectus
                  convallis auctor in ultrices. Aliquet vitae cras non nunc.
                  Massa faucibus sed sit nam. Aliquam maecenas pellentesque enim
                  odio nec enim vestibulum augue. Orci commodo neque nisl in.
                  Nibh aenean eu aliquet pharetra fringilla tristique venenatis
                  arcu duis. Dolor viverra quisque volutpat erat aliquam a mi
                  mollis. Velit amet velit vestibulum imperdiet velit accumsan.
                  Feugiat amet praesent dictum non leo aenean ac leo amet.
                  Cursus nibh odio donec eu ut ultrices. Suscipit nisi odio
                  fringilla arcu consectetur lacus. Facilisis ut pharetra
                  pellentesque a faucibus nisi. Diam varius integer donec nunc
                  mi. Pharetra ipsum lobortis nulla lorem eu. Vestibulum egestas
                  vitae ut sit lectus nec. Hac et ut pellentesque urna arcu
                  egestas accumsan. Nisi morbi augue lacus maecenas. Non nunc
                  cursus fames tellus vulputate donec ac at. Velit rhoncus.
                </p>
              </div>
              <div className="col-6">
                <img src={about_img2} alt="aboutus-img" />
              </div>
            </div>
          </div>
		</div>
	  </section>
    </div>
  );
};

export default AboutUs;
