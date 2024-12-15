import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="flex justify-center items-center gap-2 m-2">
          <figure>
            <img src={company_logo} className="w-12" alt="Shoes" />
          </figure>
          <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="flex gap-2 items-center">
              {" "}
              <FaMapMarkerAlt /> {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title} <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((skill, index) => (
              <p
                key={index}
                className="bg-gray-200 hover:bg-blue-300 rounded-md text-center"
              >
                {skill}
              </p>
            ))}
          </div>
          <div className="card-actions justify-end items-center mt-4">
            <p>
              Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
