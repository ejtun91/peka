import "./portfoliolist.scss";

const PortfolioList = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? "portfoliolist active pt" : "portfoliolist pt"}
      onClick={() => setSelected(id)}
      style={{ height: "max-content" }}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
