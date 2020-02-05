import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Project from "../components/Project";
import Loader from "../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faImage } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
  const PROJECTS_QUERY = gql`
    {
      projects {
        id
      }
    }
  `;

  const { loading, data, error } = useQuery(PROJECTS_QUERY);
  const { showMode } = useContext(GlobalContext);
  const { showModeStatus, updateShowMode } = showMode;

  const handleOptionsClick = e => {
    console.log(e.target.dataset.showMode);
    updateShowMode(e.target.dataset.showMode);
  };

  if (loading) return <Loader />;
  if (error) return "error";

  return (
    <article className="home">
      {/* Projects */}
      <div className="home__options">
        <button
          className={`home__options-grid ${
            showModeStatus === "grid" ? "active" : ""
          }`}
          onClick={handleOptionsClick}
          data-show-mode="grid"
        >
          <FontAwesomeIcon icon={faTh} />
        </button>
        <button
          className={`home__options-single ${
            showModeStatus === "single" ? "active" : ""
          }`}
          onClick={handleOptionsClick}
          data-show-mode="single"
        >
          <FontAwesomeIcon icon={faImage} />
        </button>
      </div>
      <section className={`home__projects ${showModeStatus}`}>
        {data.projects.map((project, key) => (
          <Project key={key} />
        ))}
        {console.log(data)}
      </section>
    </article>
  );
};

export default Home;
