import React from "react";
import "../Style/lore.css";

function Lore() {
  return (
    <div className="roadmap lore">
      <div className="img__nft">
        <img
          src="https://www.trippinapetribe.xyz/_next/static/media/monkeys.d353834b.png"
          width={3000}
          height={3000}
          className="w-[90%] md:w-[80%] lg:w-[950px] z-10 block"
          alt="monkeys"
        />
      </div>
      <div className="lore__image1"></div>
      <div className="lore__image2"></div>
      <div className="lore__image3"></div>
    </div>
  );
}

export default Lore;
