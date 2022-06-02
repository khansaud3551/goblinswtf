import React from "react";
import "../Style/mint.css";

function Mint() {
  return (
    <div className="col-lg-6">
      <div id="mint">
        <div className="mint__container">
          <img src="/images/GT-logo.gif" className="title__gif" />
          <div className="inputs">
            <div>
              <input
                type="text"
                min={0}
                type="number"
                className="PhoneButton"
                placeholder="0"
              />
            </div>
            <div>
              <a
                href="https://opensea.io"
                target="_blank"
                className="PhoneButton"
              >
                Check On Opensea
              </a>
            </div>
            <div>
              <a className="PhoneButton">View On Lookshare</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;
