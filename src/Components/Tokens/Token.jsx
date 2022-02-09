import React from "react";

const Token = () => {
  return (
    <div>
      <div className="content-one">
        <i id="content-icon" class="fab fa-btc" style={{ fontSize: 36 }}></i>
        <div className="content-one-child">
          <p className="content-bitcon">Bitcoin</p>
          <p className="content-rupes">$43,110.57+6.18%</p>
          <span className="content-btc">0 BTC</span>
        </div>
      </div>
      <hr className="hr-line" />

      <div className="content-two">
        <i
          id="content-icon2"
          class="fab fa-ethereum"
          style={{ fontSize: 36 }}
        ></i>
        <div className="content-Two-child">
          <p clasName="content-Ethereum">Ethereum</p>
          <p className="content-Rures2">$3,153.04+5.36%</p>
          <span className="content-Etc">0 ETC</span>
        </div>
      </div>

      <div>
        <p>Bitcoin Cash</p>
        <i class="fab fa-btc" style={{ fontSize: 36 }}></i>
        <span> 0 BCH</span>
        <p>$339.74+6.67%</p>
      </div>

      <div>
        <p>BNB</p>
        <span> 0 BNB</span>
        <img src="./images/smartchain.png.jpg" alt="" />
        <p>$436.58+5.52%</p>
      </div>

      <div>
        <p>Smart Chain</p>
        <img src="./images/smartchain.png.jpg" alt="" />
        <p>$436.5825%</p>
      </div>
      <div></div>
    </div>
  );
};
export default Token;
