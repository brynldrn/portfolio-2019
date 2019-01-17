import React, { Component, Fragment } from "react";
import ReactModal from "react-modal";
import ScrollProgress from "./components/ScrollProgress";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Spinner from "./components/Spinner";
import Markdown from "react-markdown";

ReactModal.setAppElement(document.querySelector("#root"));
export const PROJECTS_QUERY = gql`
  {
    projects {
      id
      name
      short
      longMd
      year
      position
      tech
      imageCap {
        id
        url
      }
      gallery {
        id
        url
      }
    }
  }
`;

export const SINGLE_PROJECT_QUERY = gql`
  query Project($id: ID) {
    project(where: { id: $id }) {
      name
      year
      tech
      longMd
      position
      gallery {
        id
        url
      }
    }
  }
`;

export default class App extends Component {
  state = {
    siteSub: "Web Developer. Programmer. Learner. Memes",
    dialogOpen: false,
    activeProject: "cjqxkwvupaw2n08737vxfq0lg",
    singleProject: null
  };

  openDialog = (activeProject = "cjqxkwvupaw2n08737vxfq0lg") => {
    this.setState({ dialogOpen: true, activeProject });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    return (
      <div className="App" ref="app">
        <div className="site-wide-grid">
          <ScrollProgress />
          <header className="site-section">
            <div className="grid-container">
              <h1 className="site-logo">&lt;b&gt;</h1>
              <span className="site-sub">{this.state.siteSub}</span>
            </div>
          </header>
          <section className="site-section">
            <div className="grid-container site-cards">
              <Query query={PROJECTS_QUERY}>
                {({ loading, error, data }) => {
                  if (loading) return <Spinner />;
                  if (error) console.log("error");

                  return data.projects.map(i => (
                    <Card
                      key={i.id}
                      libid={i.id}
                      openDialog={this.openDialog}
                      project={i}
                    />
                  ));
                }}
              </Query>
            </div>
          </section>
          <footer className="site-section">
            <Footer />
          </footer>
          <ReactModal
            isOpen={this.state.dialogOpen}
            contentLabel="onRequestClose"
            onRequestClose={this.closeDialog}
            className="site-dialog__content grid-container"
            overlayClassName="site-dialog__overlay"
            closeTimeoutMS={200}
          >
            <Query
              query={SINGLE_PROJECT_QUERY}
              variables={{ id: this.state.activeProject }}
            >
              {({ loading, error, data }) => {
                if (loading) return <Spinner />;
                if (error) console.log("error");
                return (
                  <Fragment>
                    <div className="site-dialog__cap grid-container">
                      <h3>{data.project.name}</h3>
                      <button onClick={this.closeDialog}>
                        <span className="icon-cross" />
                      </button>
                    </div>
                    <div className="site-dialog__inner">
                      <Gallery gallery={data.project.gallery} />
                      <span className="site-dialog__year">
                        <strong>Year</strong>:{data.project.year}
                      </span>
                      <span className="site-dialog__tech">
                        <strong>Technologies used</strong>:{data.project.tech}
                      </span>
                      <span className="site-dialog__position">
                        <strong>Position</strong>:{data.project.position}
                      </span>
                      <span className="site-dialog__long">
                        <Markdown
                          source={data.project.longMd}
                          escapeHtml={false}
                        />
                      </span>
                    </div>
                  </Fragment>
                );
              }}
            </Query>
          </ReactModal>
        </div>
      </div>
    );
  }
}
