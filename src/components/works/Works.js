import { useState } from "react";
import "./works.scss";

const Works = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/youtube.png",
      title: "Glinena Peka",
      desc: "Ovdje je sve počelo, generacijama ranije. Ovo je najučestaliji proizvod od gline, raznih veličina spreman da vašu deliciju podigne na vecu razinu.",
      img: "../assets/peka_ed1.png",
    },
    {
      id: "2",
      icon: "./assets/youtube.png",
      title: "Glineni Ćup",
      desc: "Ova vrsta proizvoda može se koristiti kao pomagalo u kuhinji ali isto tako mnogi ga koriste kao podlogu za cvijeće i ukras. Iznimne kvalitete pristajat će za svaku namjenu.",
      img: "../assets/cup_ed.png",
    },
    {
      id: "3",
      icon: "./assets/youtube.png",
      title: "Posuda za pećnicu",
      desc: "Ova posuda sa poklopcem će najfinija jela učinit jos finijim. Vrlo jednostavno korištenje i rukovanje sa ovom posudom je nešto što bi poželio svaki gurman.",
      img: "../assets/posuda_ed.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a
                    href="https://www.youtube.com/channel/UCBqBVr6l0q1_YHeBQNSoOVw/featured"
                    target="_link"
                    className="link"
                  >
                    <span>Proces proizvodnje</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("")}
      />
    </div>
  );
};

export default Works;
