import React from "react";

const IntroducingWidget = ({
  userImgSrc,
  userName,
  shortDescription,
  githubUrl = "",
  linkedinUrl = "",
  youtubeUrl = "",
  twitterUrl = "",
  instagramUrl = "",
  stackoverflowUrl = ""
}) => (
  <div className="introducingWidget__container">
    <img
      className="introducingWidget__user-img"
      alt="foto_usuario"
      src={userImgSrc}
    />
    <h1 className="introducingWidget__title">Hola me llamo {userName}</h1>
    <p className="introducingWidget__short-description">{shortDescription}</p>
    <div className="introducingWidget__social-media-container">
      <ul className="social-media__list">
        {githubUrl !== "" && (
          <li>
            <a rel="noopener noreferrer" target="_blank" href={githubUrl} title="Github">
                <i className="fab fa-github-square" />
            </a>
          </li>
        )}
        {linkedinUrl !== "" && (
          <li>
            <a rel="noopener noreferrer" target="_blank" href={linkedinUrl} title="Linkedin">
                <i className="fab fa-linkedin" />
            </a>
          </li>
        )}
        {youtubeUrl !== "" && (
          <li>
            <a rel="noopener noreferred" target="_blank" href={youtubeUrl} title="Youtube">
                <i class="fab fa-youtube-square" />
            </a>
          </li>
        )}
        {twitterUrl !== "" && (
          <li>
            <a rel="noopener noreferred" target="_blank" href={twitterUrl} title="Twitter">
                <i class="fab fa-twitter-square" />
            </a>
          </li>
        )}
        {instagramUrl !== "" && (
          <li>
            <a rel="noopener noreferred" target="_blank" href={instagramUrl} title="Instagram">
                <i class="fab fa-instagram" />
            </a>
          </li>
        )}
        {stackoverflowUrl !== "" && (
          <li>
            <a
              rel="noopener noreferred"
              target="_blank"
              href={stackoverflowUrl}
              title="Stack OverFlow"
            >
              <i class="fab fa-stack-overflow" />
            </a>
          </li>
        )}
      </ul>
    </div>
  </div>
);

export default IntroducingWidget;
