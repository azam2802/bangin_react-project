import React from "react";
import "./Footer.css";
import logo_white from "../../img/logo_white.svg";
import gpaly from "../../img/gpaly.svg";
import appstore from "../../img/appstore.svg";
import facebook from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
import twitter from "../../img/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <footer>
          <div className="row">
            <div className="col-4">
              <a href="/">
                <img src={logo_white} alt="logo" />
              </a>
              <p style={{ margin: "20px 0" }}>
                Address : Jl. Ring Road Utara, Ngringin, Condongcatur, Kec.
                Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
              </p>
              <p>+62 812 234 6789</p>
              <p>buangin@services.id</p>
            </div>
            <div
              className="col-4 col-4-nav"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="col-4">
                <h3>Company</h3>
                <Link to="/aboutus">About</Link>
                <a href="#">Careers</a>
                <a href="#">Mobile</a>
              </div>
              <div className="col-4">
                <h3>Contact</h3>
                <a href="#">Help/FAQ</a>
                <a href="#">Press</a>
                <a href="#">Affilates</a>
              </div>
              <div className="col-4">
                <h3>More</h3>
                <a href="#">Airlinefees</a>
                <a href="#">Airline</a>
                <a href="#">Tips</a>
              </div>
            </div>
            <div className="col-4">
              <h3>Discover our app</h3>
              <div className="download-from">
                <img src={gpaly} alt="download from google play" />
                <img src={appstore} alt="download from app store" />
              </div>
              <div className="socials">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
