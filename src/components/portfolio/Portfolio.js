import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Istaknuto",
    },
    {
      id: "peke",
      title: "Glinene Peke",
    },
    {
      id: "posude",
      title: "Glinene Posude",
    },
    {
      id: "cupovi",
      title: "Glineni Ćupovi",
    },
    {
      id: "suveniri",
      title: "Glineni Suveniri",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "peke":
        setData(webPortfolio);
        break;
      case "posude":
        setData(mobilePortfolio);
        break;
      case "cupovi":
        setData(designPortfolio);
        break;
      case "suveniri":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Proizvodi</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
