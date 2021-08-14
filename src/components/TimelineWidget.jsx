import React from "react";

import Fade from "react-reveal/Fade";

const TimelineWidget = ({ timelineTitle, timelineInfoList = [] }) => (
  <>
    <Fade left>
      <h2 className="timeline__title">{timelineTitle}</h2>
    </Fade>
  <div className="timeline__container" id="timeline-widget__container">
    <div className="timeline__sections-container">
      {timelineInfoList.map(section => (
        <Fade up>
          <div className="timeline__section-container">
            <p className="timeline__section-container-company">
              {section.name} <small>{section.date}</small>
            </p>
            <p className="timeline__section-container-position">
              {section.position}
            </p>
            <p className="timeline__section-container-description">
              <ul>
                {section.description.map(description => (
                  <li>{description}</li>
                ))}
              </ul>
            </p>
            <div className="timeline__section-container-technologies-wrapper">
              <p>Tecnologías usadas</p>
              <div>
                {section.technologies.map(technology => (
                  <div>{technology}</div>
                ))}
              </div>
            </div>
            <div className="timeline__section-container-specialism-wrapper">
              <p>Especialidades</p>
              <div>
                {section.specialism.map(specialism => (
                  <div>{specialism}</div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  </div>
  </>
);

export default TimelineWidget;
