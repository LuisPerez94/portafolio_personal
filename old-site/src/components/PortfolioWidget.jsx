import React from "react";

const PortfolioWidget = ({ reposArray }) => (
  <div id="portfolio-widget__container" className="portfolio-widget__container">
    <h2>Programo cosas</h2>
    <div className="portfolio-widget__projects-container">
      {reposArray.map(repo => {
        if (!repo.archived) {
          return (
            <div className="project-container">
              <div className="project-container__wrapper">
                <p className="project-container__repo-name">{repo.name}</p>
                <p className="project-container__repo-description">
                  {repo.description}
                </p>
                {repo.homepage && (
                  <a
                    className="project-container__repo-demo-button"
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Ver Demo
                  </a>
                )}
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  </div>
);

export default PortfolioWidget;
