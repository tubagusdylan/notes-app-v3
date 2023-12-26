import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/navbar.css";

const Navbar = ({ isLoged }) => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-item">
              Notes App
            </Link>
          </li>
          <li className="nav-item-wrap">
            <Link to="/archives" className="nav-item" hidden={!isLoged}>
              Archives
            </Link>
            <button className="btn-nav">
              <i className="fa-solid fa-language"></i>
            </button>
            <button className="btn-nav">
              <i className="fa-solid fa-moon"></i>
            </button>
            <button className="btn-nav" hidden={true}>
              <i className="fa-solid fa-sun"></i>
            </button>
            <button className="btn-nav" hidden={!isLoged}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  isLoged: PropTypes.bool.isRequired,
};

export default Navbar;
