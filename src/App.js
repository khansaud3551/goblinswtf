import { useEffect, useRef, useState } from "react";

import Note from "./Components/Note";
import Roadmap from "./Components/Roadmap";
import SocialIcons from "./Components/SocialIcons";
import "./Style/App.css";
import "./Style/Button.css";
import { motion } from "framer-motion";
import Lore from "./Components/Lore";

function App() {
  // Play Audio
  const [audioStatus, changeAudioStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initial, setInitial] = useState("");
  const [underground, setUnderground] = useState("hideUnderground");
  const [banner, setBanner] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoading(true);
    }, 2000);
  });

  const myRef = useRef();
  const newref = useRef();
  const videoRef = useRef();
  const opacityRef = useRef();

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

  //play video
  const playVideo = () => {
    setBtnGo("hideBtnGo");
    //add classname opacity to video
    videoRef.current.classList.add("add__opcaity");
    //play on loop
    videoRef.current.loop = true;

    videoRef.current.play();
    //add a delay to update the state

    setTimeout(() => {
      setBanner(true);
    }, 2000);
  };

  // Show Mint Section
  const [mint, setMint] = useState("mint");
  const [btnGo, setBtnGo] = useState("btnGo");

  const displayMint = () => {
    // if (mint === "mint") {
    //   setMint("displayMint");
    //   setBanner(true);
    //   startAudio();
    //   setInitial("Site-Container");
    //   setUnderground("bg_img");
    //   //add class to ref
    //   newref.current.classList.add("loaded");
    // } else {
    //   setMint("mint");
    // }
  };

  return (
    <>
      {banner ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            ref={newref}
            id="Site"
            className={`${banner} App loaded`}
          >
            <div className="displayMint">
              <audio ref={myRef} loop src="/images/m.mpeg" />

              {/* Social Icons */}
              <SocialIcons
                toggleAudio={toggleAudio}
                audioStatus={audioStatus}
              />

              {/* <ConnectWallet /> */}

              {/* Display On Click */}
              <div id="Site-Container" className="">
                {/* Mint Phone Screen */}
                {/* <Mint /> */}
                {/* Note */}
                {/* <Note /> */}
                <div className="logo__box">
                  <motion.div
                    initial={{ y: -250 }}
                    animate={{ y: 250 }}
                    //repeat forever in reverse
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 3,
                    }}
                    className="tribe__text"
                  >
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/t.png"
                      alt="tribe of demacia"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/r.png"
                      alt="tribe of demacia"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/i.png"
                      alt="tribe of demacia"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/b.png"
                      alt="tribe of demacia"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/e.png"
                      alt="tribe of demacia"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 250 }}
                    animate={{ y: -250 }}
                    //repeat forever in reverse
                    transition={{
                      repeat: Infinity,

                      repeatType: "reverse",
                      duration: 3,
                    }}
                    className="of__text"
                  >
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/o.png"
                      alt="tribe of demacia"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/f.png"
                      alt="tribe of demacia"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: -250 }}
                    animate={{ y: 250 }}
                    //repeat forever in reverse
                    transition={{
                      repeat: Infinity,

                      repeatType: "reverse",
                      duration: 3,
                    }}
                    className="demacia_text"
                  >
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/d.png"
                      alt="tribe of demacia"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/e.png"
                      alt="tribe of demacia"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/m.png"
                      alt="tribe of demacia"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/a.png"
                      alt="tribe of demacia"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/c.png"
                      alt="GoblinTown"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/i.png"
                      alt="GoblinTown"
                    />
                    <img
                      className="unselectable Logo"
                      loading="lazy"
                      src="/images/title/a.png"
                      alt="tribe of demacia"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="bg_img">
            <img
              alt="nft logo"
              className="image_bot"
              src="/images/DemonIllustration2.png"
            />
            <Roadmap />
            <Lore />
          </div>
        </>
      ) : (
        <>
          <section ref={opacityRef} className="showcase ">
            <header></header>
            <video ref={videoRef} src="images/bg-video.mp4" muted loop />
            <div className="overlay" />
            <div className="text">
              {loading ? (
                <button onClick={playVideo} className={btnGo} id="Enter1">
                  Fucking <span>enter</span> Already
                </button>
              ) : (
                <button
                  className={btnGo}
                  style={{ cursor: "not-allowed" }}
                  id="Enter1"
                >
                  Hold On Dammit
                </button>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default App;
