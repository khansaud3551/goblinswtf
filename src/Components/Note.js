import React from "react";
import "../Style/mint.css"

function Note() {
  return (
    <div className="col-md-6 col-lg-6 col-sm-6">
      <div id="Actions">
        <div className="note">
          <header>
            <p>
              <strong>1 free + gas mint per wallet.</strong> Don't be fucking
              greedy. That's how we got ourselves here.
            </p>
          </header>
          <img
            className="divide"
            src="https://goblintown.wtf/i/GT-phone-header-border.png"
          />
          <main>
            <img
              id="Cage"
              src="https://goblintown.wtf/i/GT-cage.png"
              width="56px"
            />
            <p>
              <strong>We are reserving 1,000 goblins.</strong> Because we want
              to.
            </p>
          </main>
          <img
            className="divide"
            src="https://goblintown.wtf/i/GT-phone-header-border.png"
          />
          <footer>
            <p>
              No roadmap. No Discord. No utility. CC0.{" "}
              <a
                href="https://etherscan.io/address/0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e#code"
                target="_blank"
              >
                Contract
              </a>{" "}
              wasn't actually written by goblins.
            </p>
          </footer>
          <div id="Follow">
            <span>#GOBLINFOLLOWGOBLIN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
