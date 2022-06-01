import { useRef, useState } from "react";
import "./Style/App.css";
import "./Style/Button.css";
import "./Style/mint.css";

function App() {
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();

    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    console.log("here");
    myRef.current.pause();
    changeAudioStatus(false);
  };

  // Show Mint Section
  const [mint, setMint] = useState("mint");
  const [btnGo, setBtnGo] = useState("btnGo");

  const displayMint = () => {
    if (mint === "mint") {
      setMint("displayMint");
      setBtnGo("hideBtnGo");
    } else {
      setMint("mint");
    }
  };

  return (
    <div className="App container-fluid">
      {/* Home Screen Button */}
      <button onClick={displayMint} className={btnGo} id="Enter">
        Fucking <span>enter</span> already
      </button>

      <div className={mint}>
      <audio ref={myRef} src="/images/music.mp3" />
        <div className="container">
          {/* Social Icons */}
          <div className="row justify-content-center">
            <div className="social__icons">
              <a
                href="https://twitter.com"
                target="_blank"
                className="social__icon"
              >
                <img src="/images/icons/twitter.png" alt="" />
              </a>
              <a
                href="https://opensea.io"
                target="_blank"
                className="social__icon"
              >
                <img src="/images/icons/opensea.png" alt="" />
              </a>
                {audioStatus ? (
                  <button className="social__icon" onClick={pauseAudio}>
                    <img src="/images/icons/volume.png" alt="" />
                  </button>
                ) : (
                  <button className="social__icon disabled" onClick={startAudio}>
                    <img src="/images/icons/volume.png" alt="" />
                  </button>
                )}
            </div>
          </div>

          {/* Mint Screen */}
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-md-6">
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

            {/* Note */}
            <div className="col-md-6">
              <div id="Actions">
                <div className="note">
                  <header>
                    <p>
                      <strong>1 free + gas mint per wallet.</strong> Don't be
                      fucking greedy. That's how we got ourselves here.
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
                      <strong>We are reserving 1,000 goblins.</strong> Because
                      we want to.
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
