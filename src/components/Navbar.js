import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faHome,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#" className="active">
            <span>
              <FontAwesomeIcon icon={faHome} />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faUserAlt} />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
