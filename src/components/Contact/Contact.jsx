import React from "react";
import Header from "../Header/Header";
import './Contact.css'

const Contact = () => {
  return (
    <div className="Contact">
      <div className="section">
        <div className="container">
          <Header />
          <h1>Our Contacts</h1>
          <div className="contacts">
            <h3>Phone: +62 812 234 6789</h3>
            <h3>
              Address: Address : Jl. Ring Road Utara, Ngringin, Condongcatur,
              Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
            </h3>
            <h3>Email: buangin@services.id</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
