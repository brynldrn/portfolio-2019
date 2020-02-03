import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleToggleClick = () => {
    console.log(darkMode);
    setDarkMode(!darkMode);
  };
  return (
    <button className="dark-mode-toggle" onClick={handleToggleClick}>
      <span role="img" aria-label="Dark Mode Toggle">
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </span>
    </button>
  );
};

export default DarkModeToggle;
