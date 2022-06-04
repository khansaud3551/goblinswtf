import { useEffect, useRef, useState } from "react";
import Mint from "./Components/Mint";
import Note from "./Components/Note";
import "./Style/App.css";
import "./Style/Button.css";

function App() {
  // Play Audio
  const [audioStatus, changeAudioStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initial, setInitial] = useState("");

  useEffect(() => {
    setInterval(() => {
      setLoading(true);
    }, 2000);
  });

  const myRef = useRef();
  const newref = useRef();

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
      startAudio();
      setInitial("Site-Container");
      //add class to ref
      newref.current.classList.add("loaded");
    } else {
      setMint("mint");
    }
  };

  return (
    <>
      <div ref={newref} id="Site" className="App ">
        {/* Home Screen Button */}
        {loading ? (
          <button onClick={displayMint} className={btnGo} id="Enter">
            Fucking <span>enter</span> Already
          </button>
        ) : (
          <button
            className={btnGo}
            style={{ cursor: "not-allowed" }}
            id="Enter"
          >
            Hold On Dammit
          </button>
        )}

        <div className={mint}>
          <audio ref={myRef} loop src="/images/music.mp3" />

          {/* Social Icons */}
          <div id="Controls">
            <a
              href="https://twitter.com/goblintownwtf"
              id="Twitter"
              target="_blank"
            >
              <img
                src="https://goblintown.wtf/i/GT-twitter-circle.png"
                width={64}
              />
            </a>
            <a
              href="https://opensea.io/collection/goblintownwtf"
              id="Opensea"
              target="_blank"
            >
              <img src="https://goblintown.wtf/i/GT-opensea.png" width={64} />
            </a>
            <span id="Volume">
              <img
                src="https://goblintown.wtf/i/GT-volume-circle.png"
                width={64}
              />
            </span>
          </div>

          {/* Display On Click */}
          <div id={initial} className="">
            {/* Mint Phone Screen */}
            <Mint />
            {/* Note */}
            <Note />
          </div>
        </div>
      </div>
      <div id="Underground">
        <div id="Psst">
          <img src="https://www.goblintown.wtf/i/psst.png" />
        </div>
        <div id="Goblin-Family">
          <img
            id="Family"
            src="https://www.goblintown.wtf/i/GT-family-compressed.png"
          />
        </div>
        <img
          id="Rocks"
          src="https://www.goblintown.wtf/i/GT-rocks-compressed.png"
        />
      </div>
    </>
  );
}

export default App;
