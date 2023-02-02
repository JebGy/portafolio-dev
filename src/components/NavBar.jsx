import { Link } from "react-router-dom";
import "../style/default.style.css";
function NavBar() {
  return (
    <>
      <div className="navbar">
        <h1 className="me-title">Favio Dev</h1>
        <ul className="option-list">
          <li className="option">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="option">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="option">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
