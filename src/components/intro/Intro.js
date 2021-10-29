import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 70,
      strings: ["Glinenih peka.", "Glinenih Posuda.", "Glinenih Ćupova."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/pileed.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Bok, Ja sam</h2>
          <h1>Pile Knezović</h1>
          <h3>
            I bavim se proizvodnjom <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio" id="portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
