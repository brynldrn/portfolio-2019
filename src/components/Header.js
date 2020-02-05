import React, { useRef } from "react";

import useOnScreen from "../hooks/useOnScreen";

const Header = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-50px");

  return (
    <header className={`header ${onScreen ? "header--visible" : ""}`} ref={ref}>
      <img src="https://placehold.it/80x80" alt="Logo" />
      <div className="header__stats">
        <div className="header__stats-item">
          <span className="num">69</span>
          <span className="desc">lorem</span>
        </div>
        <div className="header__stats-item">
          <span className="num">420</span>
          <span className="desc">ipsum</span>
        </div>
        <div className="header__stats-item">
          <span className="num">69K</span>
          <span className="desc">dolor</span>
        </div>
      </div>
      <div className="header__bio">
        <span className="header__username">bryanaldrn</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem vel dolorem ut quidem voluptate soluta. Accusamus,
          vitae quidem exercitationem, enim tempore deserunt odit maxime error
          itaque, sint fugit culpa nulla.
        </p>
      </div>
    </header>
  );
};

export default Header;
