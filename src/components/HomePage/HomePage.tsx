import React from "react";
import homePageStyle from "./homepage.module.scss";
import yellowUmbrella from "./pngwing.com-2.png";
import screenshotOne from "./screenshot1.png";
import screenshotLine from "./screenshotLine.png";
import lastScreenshot from "./lastScreenshot.png";
import yellowme from "./yellowme.png";
import fun from "./icons8-grinning-face-48.png";

const HomePage = () => {
  return (
    <div className={homePageStyle.homePageContainer}>
      <div className={homePageStyle.homePageRowOne}>
        <img src={yellowUmbrella} alt="Lorem Ipsum Image" />
        <div className={homePageStyle.homePageRowOneText}>
          <h1>Wheather Checker Plus +</h1>
          <p>
            This is a geolocation and weather API fetching app with the
            implementation of Auth0 written in TypeScript using Vite React
            framework. Once you are logged in or signed up, you can see the
            current weather as well as a weather forecast for several days
            ahead. Navigation through pages is done whereby React Routes. Only
            Authenticated users have Authorisation to navigate to the weather
            content and contact me section. In addition, SASS and SASS modules
            were used for styling.
          </p>
        </div>
      </div>
      <div className={homePageStyle.homePageRowTwo}>
        <div className={homePageStyle.item0}>
          <img src={screenshotOne} alt="screenshot" />
        </div>
        <div className={homePageStyle.item1}>
          {" "}
          I am sometimes a tricky CSS Grid with some of my children being
          Flexbox, and sometimes, I am a Flexbox container. It all depends on
          media queries as I am a responsive chick.
        </div>
        <div className={homePageStyle.item2}>
          {" "}
          <img src={yellowme} alt="my pic" />
        </div>
        <div className={homePageStyle.item3}>
          <img src={screenshotLine} alt="screenshot from miro" />
        </div>
      </div>
      <div className={homePageStyle.homePageRowThree}>
        <img src={lastScreenshot} alt="What is lorem ipsum" />
        <div className={homePageStyle.homePageRowThreeText}>
          <h1>
            <img src={fun} alt="fun emoji" />I am a fun weather app. What is a
            description of weather?
          </h1>
          <p>
            Weather is the state of the atmosphere, including temperature,
            atmospheric pressure, wind, humidity, precipitation, and cloud
            cover. The daily forecast provides current, min and max temperature
            for the location of your choice as well as humidity. wind speed and
            direction. If you have any suggestions for improvement or
            collaboration, check details on the contact page (I was built on 18
            Dec 2022).
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
