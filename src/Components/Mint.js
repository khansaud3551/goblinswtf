import React from "react";
import "../Style/mint.css";
import "../Style/note.css";

function Mint() {
  return (
    <aside id="Convo">
      <header>
        <div className="avatars">
          <div className="garf">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin">
                <img src="/images/1.png" />
              </div>
            </div>
          </div>
          <div className="urki">
            <div className="pfp">
              <div className="">
                <h2>?</h2>
              </div>
            </div>
          </div>
        </div>
        <h2>Piso n Diablo</h2>
      </header>
      <main>
        <div className="container">
          <div className="message garf">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin">
                <img className="goblin__head" src="/images/1.png" />
              </div>
            </div>
            <div className="content loud">
              <div className="goblin__name">piso</div>
              <p>Lord Diablo!</p>
            </div>
          </div>
          <div className="message urki">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin_bg">
                <h2>?</h2>
              </div>
            </div>
            <div className="content">
              <div className="goblin__name">Diablo</div>
              <p>Yes?!</p>
            </div>
          </div>
          <div className="message garf">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin">
                <img className="goblin__head" src="/images/1.png" />
              </div>
            </div>
            <div className="content">
              <div className="goblin__name">Piso</div>
              <p>There is something that you should know</p>
            </div>
          </div>
          <div className="message urki">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin_bg">
                <h2>?</h2>
              </div>
            </div>
            <div className="content">
              <div className="goblin__name">Diablo</div>
              <p>What is it?</p>
            </div>
          </div>
          <div className="message garf">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin">
                <img className="goblin__head" src="/images/1.png" />
              </div>
            </div>
            <div className="content">
              <div className="goblin__name">piso</div>
              <p>Currently there is a war going</p>
              <p>btw elfs , goblins and dwarfs</p>
              <p>
                dwarf got almost annihilated but elves are still fighting with
                goblins
              </p>
            </div>
          </div>
          <div className="message urki">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin_bg">
                <h2>?</h2>
              </div>
            </div>
            <div className="content">
              <div className="goblin__name">Diablo</div>
              <p>Really? How come mere goblins can do this?</p>
            </div>
          </div>
          <div className="message garf">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin">
                <img className="goblin__head" src="/images/1.png" />
              </div>
            </div>
            <div className="content">
              <div className="goblin__name">Piso</div>
              <p>we dont know how goblins are getting this strong</p>
              <p>but they must have a lord that is controlling them</p>
              <p>
                There is also rumour going around that Apes are going to hlp
                goblin?
              </p>
            </div>
          </div>
          <div className="message urki">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin_bg">
                <h2>?</h2>
              </div>
            </div>
            <div className="content">
              <div className="goblin__name">Diablo</div>
              <p>Really? Interesting.</p>
              <p>Finally I can have some fun too</p>
              <p>Release 3333 Orrins , we will check there power first.</p>
            </div>
          </div>
          <div className="message garf">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin">
                <img className="goblin__head" src="/images/1.png" />
              </div>
            </div>
            <div className="content">
              <div className="goblin__name">Piso</div>
              <p>whats the strategy?</p>
            </div>
          </div>
          <div className="message urki">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin_bg">
                <h2>?</h2>
              </div>
            </div>
            <div className="content">
              <div className="goblin__name">Diablo</div>
              <p>Order them to attack head on</p>
              <p>
                You dont have to worry about the sacrifices we have plenty other
                minions
              </p>
            </div>
          </div>
          <div className="message garf">
            <div className="pfp" style={{ overflow: "hidden" }}>
              <div className="goblin">
                <img className="goblin__head" src="/images/1.png" />
              </div>
            </div>
            <div className="content">
              <div className="goblin__name">Piso</div>
              <p>As you wish my Lord! ...</p>
            </div>
          </div>

          {/*here*/}
        </div>
      </main>
    </aside>
  );
}

export default Mint;
