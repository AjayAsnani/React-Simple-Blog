import React from "react";
import "./Jobs.css"; // Assuming you have a CSS file named "Jobs.css"

const Job = ({ title, description, imageUrl, lastDate }) => (
  <div className="job">
    <h2>{title}</h2>
    <p className="job-description">{description}</p>

    <h4 className="job-last-date">Last Date to Apply: {lastDate}</h4>
  </div>
);

const Jobs = () => {
  const jobs = [
    {
      title: "Accountant",
      description:
        "Seeking a skilled and detail-oriented Accountant to manage financial records, prepare statements, and analyze data for decision-making. Responsibilities include maintaining accurate books, reconciling accounts, processing invoices, and ensuring regulatory compliance. ",

      lastDate: "June 30, 2023",
    },
    {
      title: "Sales Manager",
      description:
        "We're hiring a motivated and experienced Sales Manager to lead and manage our sales efforts, driving business growth and achieving targets. You'll focus on building strong client relationships, identifying new opportunities, and implementing effective sales strategies. ",

      lastDate: "July 15, 2023",
    },
    {
      title: "Jr. Developer",
      description:
        "We are seeking a motivated and talented Junior Developer to join our dynamic development team. As a Junior Developer, you will have the opportunity to work on various projects, collaborating with senior developers and gaining hands-on experience in the software development lifecycle",

      lastDate: "July 25, 2023",
    },
    {
      title: "Data Entry Operator",
      description:
        "We are currently seeking a skilled and detail-oriented Data Entry Operator to join our team. As a Data Entry Operator, you will play a crucial role in ensuring accurate and efficient data entry, processing, and management.",

      lastDate: "July 30, 2023",
    },
    // Add more jobs as needed
  ];

  return (
    <div className="jobs-container" id="jobs">
      <h1>Available Jobs</h1>
      <p className="jobs-description">
        Check out the latest job opportunities at our company!
      </p>
      {jobs.map((job, index) => (
        <Job
          key={index}
          title={job.title}
          description={job.description}
          lastDate={job.lastDate}
        />
      ))}
    </div>
  );
};

export default Jobs;
