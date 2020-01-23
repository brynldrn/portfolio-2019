import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Project from "../components/Project";
import Loader from "../components/Loader";
// import Hero from "../components/Hero";

const Home = () => {
  const PROJECTS_QUERY = gql`
    {
      projects {
        id
      }
    }
  `;

  const { loading, data, error } = useQuery(PROJECTS_QUERY);
  if (loading) return <Loader />;
  if (error) return "error";

  return (
    <article className="home">
      {/* <Hero /> */}
      {/* Projects */}
      <section className="home__projects">
        {data.projects.map((project, key) => (
          <Project key={key} />
        ))}
        {console.log(data)}
      </section>
    </article>
  );
};

export default Home;
