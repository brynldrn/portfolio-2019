import React, { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

const Project = props => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-50px");

  return (
    <article
      className={`project ${onScreen ? "project--visible" : ""}`}
      ref={ref}
    >
      <img src="https://picsum.photos/500" alt="Thumbnail" />
      <div className="project__meta">
        <h2>Project</h2>
        <span>Category</span>
      </div>
    </article>
  );
};

export default Project;
