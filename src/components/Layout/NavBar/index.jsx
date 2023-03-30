import Logo from "/img/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html" id="logo">
          <span>
            <img src={Logo} alt="" width="100" />
          </span>
        </a>
        <button
          className="navbar-toggler border-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span>
            <FontAwesomeIcon icon={faBars} color="#ff1525" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="ul-1 navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/">
                ACCEUIL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/bootcamp">
                BOOTCAMP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/reservation">
                RESERVATION
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>

          <NavLink to="/Sign">
            <button
              type="button"
              className="btn btn-danger text-light"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal"
            >
              JE MABONNE
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
