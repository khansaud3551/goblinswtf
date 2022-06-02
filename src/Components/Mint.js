import React from "react";
import "../Style/mint.css";

function Mint() {
  return (
    <div className="col-md-6 col-lg-6 col-sm-6">
      <div id="mint">
        <div className="mint__container">
          <img
            src="https://goblintown.wtf/i/GT-logo.gif"
            className="title__gif"
          />
          <div className="inputs">
            <input
              type="text"
              min={0}
              type="number"
              className="PhoneButton"
              placeholder="0"
            />
            <a
              href="https://opensea.io"
              target="_blank"
              className="PhoneButton"
            >
              Check On Opensea
            </a>
            <a className="PhoneButton">View On Lookshare</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;
