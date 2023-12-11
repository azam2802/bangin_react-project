import { React, useState } from "react";
import Header from "../Header/Header";
import composterFullPack from "../../img/Section4_card-img3.png";
import bca_bank from "../../img/bca-bank.png";
import bri_bank from "../../img/bri-bank.png";
import bni_bank from "../../img/bni-bank.png";
import mega_bank from "../../img/mega-bank.png";
import mandiri_bank from "../../img/mandiri-bank.png";
import btn_bank from "../../img/btn-bank.png";
import muamalat_bank from "../../img/muamalat-bank.png";
import ovo_bank from "../../img/ovo-bank.png";
import indomaret_bank from "../../img/indomaret-bank.png";
import alfamart_bank from "../../img/alfamart-bank.png";
import dana_bank from "../../img/dana-bank.png";
import "./Product.css";

const ProductComposterFull = () => {
  const [amount, setAmount] = useState(1);
  const [bank, setBank] = useState("BCA BANK");
  const price = 300000
  let total = amount * price;

  function minusAmount() {
    if (amount <= 1) {
      return;
    } else {
      setAmount(amount - 1);
    }
  }

  function plusAmount() {
    if (amount >= 10) {
      return;
    } else {
      setAmount(amount + 1);
    }
  }

  return (
    <div className="Product">
      <section>
        <div className="container">
          <Header />
          <div className="product-info">
            <div className="product-img">
              <img src={composterFullPack} alt="composter Full Pack" />
            </div>
            <div className="product-text">
              <h3>Product</h3>
              <h1>Composter Full Pack</h1>
              <h6>
                We do prioritize the fulfillment of customer needs for a product
                and service, rather than solely focusing on the creation of a
                new "eco-product" that may not have a demand, enabling the
                regular market forces to come into play, operating based on the
                principles of supply and demand.
              </h6>
              <h1>RP. {price}</h1>
              <h6>Quantity:</h6>
              <div className="quantity">
                <div className="set-amount">
                  <button onClick={minusAmount}>-</button>
                  <h6 id="amount">{amount}</h6>
                  <button onClick={plusAmount}>+</button>
                </div>
                <h6>103 Remaining</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="purchasing">
            <div className="customer-info">
              <label htmlFor="customer-name">Input your name</label>
              <input type="text" name="customer-name" />
              <label htmlFor="customer-address">Input your address</label>
              <input type="text" name="customer-address" id="input-address" />
              <label htmlFor="customer-phone">Phone number</label>
              <input type="tel" name="customer-phone" />
            </div>
            <div className="payment-info">
              <label htmlFor="voucher">Code Voucher</label>
              <input type="text" name="voucher" />
              <h3>Payment</h3>
              <div className="payment-banks">
                <button>
                  <img
                    src={bca_bank}
                    alt="bca_bank"
                    onClick={() => setBank("BCA BANK")}
                  />
                </button>
                <button>
                  <img
                    src={bri_bank}
                    alt="bri_bank"
                    onClick={() => setBank("BRI BANK")}
                  />
                </button>
                <button>
                  <img
                    src={bni_bank}
                    alt="bni_bank"
                    onClick={() => setBank("BNI BANK")}
                  />
                </button>
                <button>
                  <img
                    src={mega_bank}
                    alt="mega_bank"
                    onClick={() => setBank("MEGA BANK")}
                  />
                </button>
                <button>
                  <img
                    src={mandiri_bank}
                    alt="mandiri_bank"
                    onClick={() => setBank("MANDIRI BANK")}
                  />
                </button>
                <button>
                  <img
                    src={btn_bank}
                    alt="btn_bank"
                    onClick={() => setBank("BTN BANK")}
                  />
                </button>
                <button>
                  <img
                    src={muamalat_bank}
                    alt="muamalat_bank"
                    onClick={() => setBank("MUAMALAT BANK")}
                  />
                </button>
                <button>
                  <img
                    src={ovo_bank}
                    alt="ovo_bank"
                    onClick={() => setBank("OVO BANK")}
                  />
                </button>
                <button>
                  <img
                    src={indomaret_bank}
                    alt="indomaret_bank"
                    onClick={() => setBank("INDOMARET BANK")}
                  />
                </button>
                <button>
                  <img
                    src={alfamart_bank}
                    alt="alfamart_bank"
                    onClick={() => setBank("ALFAMART BANK")}
                  />
                </button>
                <button>
                  <img
                    src={dana_bank}
                    alt="dana_bank"
                    onClick={() => setBank("DANA BANK")}
                  />
                </button>
              </div>
              <h3>Your choice: {bank}</h3>
              <div className="total-price">
                <h3>Total: {total} RP.</h3>
              </div>
            </div>
          </div>
          <div className="payment-buttons">
		  <a href="/"><button id="btn-cancel">Cancel</button></a>
            <button id="btn-checkout">Check Out</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductComposterFull;
