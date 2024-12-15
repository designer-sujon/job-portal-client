import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, company, deadline } = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl">Job Details</h2>
      <h3 className="text-2xl">{title}</h3>
      <p>Apply for: {company}</p>
      <p>Deadline: {deadline}</p>
      <button className="btn">Apply Now</button>
    </div>
  );
};

export default JobDetails;
