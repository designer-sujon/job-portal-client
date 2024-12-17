import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, deadline } = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl">Job Details</h2>
      <h3 className="text-2xl">{title}</h3>
      <p>Apply for: {company}</p>
      <p>Deadline: {deadline}</p>
      <Link to={`/jobapply/${_id}`}>
        <button className="btn">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
