import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.css";

import IntroducingWidget from "./components/IntroducingWidget";
import NavigationMenu from "./components/NavigationMenu";
import PortfolioWidget from "./components/PortfolioWidget";

import UserInformation from "./information/information.json";
import TimelineWidget from "./components/TimelineWidget";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      userInformation: {},
      repos: []
    };
  }

  componentDidMount = () => {
    fetch("https://api.github.com/users/LuisPerez94")
      .then(response => response.json())
      .then(response => {
        this.setState({ userData: response });
      });

    fetch("https://api.github.com/users/LuisPerez94/repos")
      .then(response => response.json())
      .then(response => {
        this.setState({ repos: response });
      });

    this.setState({ userInformation: UserInformation });
  };

  render() {
    const { userData, userInformation, repos } = this.state;
    console.log(userInformation);
    return (
      <div className="main-container">
        <div className="page-content__container">
          <NavigationMenu />
          <IntroducingWidget
            userImgSrc={userData.avatar_url}
            userName="Luis Pérez"
            shortDescription="Desarrollador FullStack | Consultor de E-commerce | En Pro de la vida saludable"
            githubUrl={userData.html_url}
            linkedinUrl="https://www.linkedin.com/in/luis-%C3%A1ngel-p%C3%A9rez-mu%C3%B1oz-a9630455/"
            youtubeUrl=""
            twitterUrl="https://twitter.com/Mim0Perez"
            instagramUrl="https://www.instagram.com/mimoperez/?hl=es-la"
            stackoverflowUrl="https://es.stackoverflow.com/users/31409/luis?tab=profile"
          />
          <hr />
          <div className="about-me__container">
            <h2>Acerca de mi</h2>
            <p>{userData.bio}</p>
          </div>
          <hr />
          <PortfolioWidget reposArray={repos} />
          <hr />
          <TimelineWidget
            timelineTitle="Experiencia Laboral"
            timelineInfoList={userInformation.experience}
          />
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
