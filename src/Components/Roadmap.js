import { useState } from "react";
import "../Style/roadmap.css";

function Roadmap() {
  const [view, setView] = useState(1);

  const viewSection = (number) => {
    if (number === 1) {
      setView(1);
    }
    if (number === 2) {
      setView(2);
    }
    if (number === 3) {
      setView(3);
    }
    if (number === 4) {
      setView(4);
    }
  };

  return (
    <div className="roadmap ">
      <div className="section__roadmap">
        <h1 className="roadmap__heading">Whats Ahead</h1>
        <div className="box">
          <div className="box__dotes">
            <h1 onClick={() => viewSection(1)}>.</h1>
            <h1 onClick={() => viewSection(2)}>.</h1>
            <h1 onClick={() => viewSection(3)}>.</h1>
            <h1 onClick={() => viewSection(4)}>.</h1>
          </div>
          <div className="box__content">
            {view === 1 && (
              <div className="box__content__1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid numquam doloribus optio cum dolores expedita, magnam
                  eaque labore cumque eum aspernatur amet ipsam maxime
                  blanditiis ab recusandae libero veritatis consectetur!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid numquam doloribus optio cum dolores expedita, magnam
                  eaque labore cumque eum aspernatur amet ipsam maxime
                  blanditiis ab recusandae libero veritatis consectetur!
                </p>
              </div>
            )}
            {view === 2 && (
              <div className="box__content__2">
                <p>lorem ipsum </p>
              </div>
            )}
            {view === 3 && (
              <div className="box__content__3">
                <p>lorem ipsum 3</p>
              </div>
            )}
            {view === 4 && (
              <div className="box__content__4">
                <p>lorem ipsum 4</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
