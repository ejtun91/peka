import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Početna</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Proizvodi</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Detalji</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Proces</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
