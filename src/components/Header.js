import React, { useRef } from "react";
import { Link } from "react-router-dom";

import useOnScreen from "../hooks/useOnScreen";

const Header = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-50px");

  return (
    <header className={`header ${onScreen ? "header--visible" : ""}`} ref={ref}>
      <img src="https://placehold.it/100x70" alt="Logo" />

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
