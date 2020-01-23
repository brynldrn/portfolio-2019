import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleToggleClick = () => {
    console.log(darkMode);
    setDarkMode(!darkMode);
  };
  return (
    <button className="dark-mode-toggle" onClick={handleToggleClick}>
      <span role="img" aria-label="Dark Mode Toggle">
        {darkMode ? "☀️" : "🌙"}
      </span>
    </button>
  );
};

export default DarkModeToggle;
