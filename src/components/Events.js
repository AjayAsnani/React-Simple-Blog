import React from "react";
import "./Events.css";
import business from "./assets/Business.jpg";
import award from "./assets/award.webp";
import product from "./assets/product.jpg";

const Event = ({ title, description, imageUrl, date }) => (
  <div className="event">
    <h2>{title}</h2>
    <p className="event-description">{description}</p>
    <img className="event-image" src={imageUrl} alt="Event" />
    <h4 className="event-date">{date}</h4>
  </div>
);

const Events = () => {
  const events = [
    {
      title: "Business Conference",
      description:
        "We are Excited to announce that our company is organizing an enriching and dynamic conference designed to inspire and connect professionals of our respected fields. This highly anticipated event, scheduled to take place on June 15, is set to be a gathering of industry leaders, innovators, and experts from around the globe.",
      imageUrl: business,
      date: "June 15, 2023",
    },
    {
      title: "Appreciation Ceremony",
      description:
        "We are delighted to announce that our company will be hosting a prestigious award ceremony dedicated to honoring and appreciating our exceptional employees. This special event, scheduled to take place on June 25, is a momentous occasion to recognize the remarkable contributions and achievements of our talented workforce.",
      imageUrl: award,
      date: "June 25, 2023",
    },
    {
      title: "Product Launch",
      description:
        "We are thrilled to announce that on July 25, we will be hosting an exclusive product launch event that promises to be an extraordinary experience. This eagerly anticipated occasion marks a significant milestone for our company as we introduce our groundbreaking new product to the world.",
      imageUrl: product,
      date: "July 25, 2023",
    },

    // Add more events as needed
  ];

  return (
    <div className="events-container" id="events">
      <h1>Events</h1>
      {events.map((event, index) => (
        <Event
          key={index}
          title={event.title}
          description={event.description}
          imageUrl={event.imageUrl}
          date={event.date}
        />
      ))}
    </div>
  );
};

export default Events;
