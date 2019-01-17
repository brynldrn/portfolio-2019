import React from "react";

const Card = ({ project: { imageCap, name, short }, openDialog, libid }) => {
  const handleClick = () => {
    openDialog(libid);
  };
  return (
    <div className="site-card">
      <div className="site-card__cap">
        <img src={imageCap.url} alt="" />
      </div>
      <div className="site-card__name">{name}</div>
      <div className="site-card__short">{short}</div>
      <div className="site-card__cta">
        <button className="site-card__button" onClick={handleClick}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
