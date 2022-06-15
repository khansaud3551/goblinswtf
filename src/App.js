import { useEffect, useRef, useState } from "react";
import ConnectWallet from "./Components/ConnectWallet";
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
    //reduce speed of audio
    //reduce voice of audio

    myRef.current.playbackRate = 0.8;
    myRef.current.volume = 0.5;
    changeAudioStatus(true);
  };

  //toogle audio on off
  const toggleAudio = () => {
    if (audioStatus) {
      myRef.current.pause();
      changeAudioStatus(false);
    } else {
      myRef.current.play();
      changeAudioStatus(true);
    }
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
          <audio ref={myRef} loop src="/images/m.mpeg" />

          {/* Social Icons */}
          <div id="Controls">
            <a
              href="https://twitter.com/goblintownwtf"
              id="Twitter"
              target="_blank"
            >
              <img src="/images/icons/Twitter.png" width={64} />
            </a>
            <a
              href="https://opensea.io/collection/goblintownwtf"
              id="Opensea"
              target="_blank"
            >
              <img src="/images/icons/OS.png" width={64} />
            </a>
            <span
              onClick={toggleAudio}
              id={`${audioStatus ? "Volume" : "voloff"}`}
            >
              {audioStatus ? (
                <img
                  className="image_bot"
                  src="/images/icons/Music_On.png"
                  width={64}
                />
              ) : (
                <img
                  className="image_bot"
                  src="/images/icons/Music_Off.png"
                  width={64}
                />
              )}
              <img />
            </span>
          </div>

          <ConnectWallet />

          {/* Display On Click */}
          <div id={initial} className="">
            {/* Mint Phone Screen */}
            <Mint />
            {/* Note */}
            <Note />
          </div>
        </div>
      </div>
      <div className="bg_img">
        <img className="image_bot" src="/images/DemonIllustration2.png" />
      </div>
      {/* <div id="Underground">
        <div id="Psst">
          <img src="https://www.goblintown.wtf/i/psst.png" />
        </div>

        <img id="Rocks" src="/images/DemonIllustration2.png" />
      </div> */}
    </>
  );
}

export default App;
