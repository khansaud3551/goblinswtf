import React from "react";

function SocialIcons({ audioStatus, toggleAudio }) {
  return (
    <>
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
        <span onClick={toggleAudio} id={`${audioStatus ? "Volume" : "voloff"}`}>
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
    </>
  );
}

export default SocialIcons;
