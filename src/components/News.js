import React from "react";
import "./News.css";
import ai from "./assets/ai.jpg";
import carry from "./assets/carry.jpeg";
import test from "./assets/test.jpg";
import cyclone from "./assets/cyclone.png";

// Sub-component for news items
const NewsSubComponent = ({ heading, paragraph, logo }) => {
  return (
    <div className="news-subcomponent">
      <h2 className="news-heading">{heading}</h2>
      <img className="news-logo" src={logo} alt="News Logo" />
      <p className="news-paragraph">{paragraph}</p>
    </div>
  );
};

// Parent component for the news component
const News = () => {
  return (
    <div className="news-component" id="news">
      <h1>News</h1>
      <div className="news-container">
        <NewsSubComponent
          heading="Breaking News"
          paragraph="Red alert issued in 9 cities of Gujarat because of cyclone Biparjoy, the preparations are full to fight with the cyclone as many NDRF teams are there the Army is also there for rescue process who are stuck."
          logo={cyclone}
        />
        <NewsSubComponent
          heading="Sports Update"
          paragraph="One more Loss to team india as they lose against Australia in WTC under Rohit Sharma's Captaincy as Australia won with huge margin of 209 runs."
          logo={test}
        />
        <NewsSubComponent
          heading="Entertainment Buzz"
          paragraph="Meet Ajey Nagar, the 23-year-old Indian YouTuber who goes by the name CarryMinati, becomes no. 1 Youtuber of Asia with 38.5 million subcribers and net woth crossing $5 million dollars."
          logo={carry}
        />
        <NewsSubComponent
          heading="Technology News"
          paragraph="The AI Revolution is coming and everyone should be prepared for it mentally and physically as it has potential to takeaway several jobs which can be done easily with the help of AI tools like ChatGPT and Google BARD."
          logo={ai}
        />
      </div>
    </div>
  );
};

export default News;
