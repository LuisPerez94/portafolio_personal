import React from "react";

const TimelineWidget = ({ timelineTitle, timelineInfoList = [] }) => (
  <div className="timeline__container">
    <h2 className="timeline__title">{timelineTitle}</h2>
    <div className="timeline__sections-container">
      {timelineInfoList.map(section => (
        <div className="timeline__section-container">
          <p className="timeline__section-container-company">
            {section.name} <small>{section.date}</small>
          </p>
          <p className="timeline__section-container-position">
            {section.position}
          </p>
          <p className="timeline__section-container-description">
            {section.description}
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
      ))}
    </div>
  </div>
);

export default TimelineWidget;
