import React from "react";
import "../Style/mint.css";
import ConnectWallet from "./ConnectWallet";

function Note() {
  return (
    <div id="Mintery" className="">
      <div id="Masthead">
        <img
          id="Logo"
          className="unselectable"
          loading="lazy"
          src="https://goblintown.wtf/i/GT-logo.gif"
          width={400}
        />
        <div id="Counter1">
          {/*<div id="Counter__Goblin">*/}
          {/*	<img src="https://goblintown.wtf/i/GT-garble.gif" width="88" />*/}
          {/*</div>*/}
          {/*<span id="left"></span>*/}
          {/*<p>/</p>*/}
          {/*<span id="Counter__Real">9,999</span>*/}
          <ConnectWallet />
        </div>
      </div>

      <div id="Actions">
        <img className="img__contract" src="/images/Contract.png" alt="" />
      </div>
    </div>
  );
}

export default Note;
