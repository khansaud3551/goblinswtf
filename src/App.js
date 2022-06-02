import { useEffect, useRef, useState } from "react";
import Mint from "./Components/Mint";
import Note from "./Components/Note";
import "./Style/App.css";
import "./Style/Button.css";

function App() {
  // Play Audio
  const [audioStatus, changeAudioStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoading(true);
    }, 2000);
  });

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
      {loading ? (
        <button onClick={displayMint} className={btnGo} id="Enter">
          Fucking <span>enter</span> Already
        </button>
      ) : (
        <button className={btnGo} style={{ cursor: "not-allowed" }} id="Enter">
          Hold On Dammit
        </button>
      )}

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

          {/* Display On Click */}
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            {/* Mint Phone Screen */}
            <Mint />

            {/* Note */}
            <Note />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
