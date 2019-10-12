import React from "react";
import ReactDOM from "react-dom";

import './styles/main.css';

import IntroducingWidget from './components/IntroducingWidget';

class Welcome extends React.Component {
  render() {
    return (
        <div className="main-container">
            <IntroducingWidget
                userImgSrc="https://avatars0.githubusercontent.com/u/9045933?s=400&u=b787b2d0003d66de33e4710846f511d322b2583d&v=4"
                userName="Luis Pérez"
                shortDescription="Desarrollador FullStack | Consultor de E-commerce | En Pro de la vida saludable"
                githubUrl="https://github.com/LuisPerez94"
                linkedinUrl="https://www.linkedin.com/in/luis-%C3%A1ngel-p%C3%A9rez-mu%C3%B1oz-a9630455/"
                youtubeUrl=""
                twitterUrl="https://twitter.com/Mim0Perez"
                instagramUrl="https://www.instagram.com/mimoperez/?hl=es-la"
                stackoverflowUrl="https://es.stackoverflow.com/users/31409/luis?tab=profile"
            />
        </div>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
