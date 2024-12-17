import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2 className="text-3xl">Post a New Job</h2>
      <div>
        <form className="card-body">
          {/* job title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              className="input input-bordered"
              required
            />
          </div>
          {/* job location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* job type */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select className="select select-ghost w-full max-w-xs">
                <option disabled selected>
                  Pick a Job Type
                </option>
                <option>Full Time</option>
                <option>Intern</option>
                <option>Part Time</option>
              </select>
            </div>
            {/* job category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Field</span>
              </label>
              <select className="select select-ghost w-full max-w-xs">
                <option disabled selected>
                  Pick a Job Field
                </option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Teaching</option>
              </select>
            </div>
          </div>
          {/* Salary Range  */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <input
                type="text"
                name="Min"
                placeholder="Min Salary"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="Max"
                placeholder="Max Salary"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <select className="select select-ghost w-full max-w-xs">
                <option disabled selected>
                  Pick a Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>CAD</option>
              </select>
            </div>
          </div>
          {/* job description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              name="description"
              placeholder="Job Descriptio"
            ></textarea>
          </div>
          {/* Company Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* job Requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              name="requirements"
              placeholder="Put Job Requirements in a new line"
            ></textarea>
          </div>
          {/* job Responsibility */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibilities</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              name="responsibilities"
              placeholder="Put Job Responsibilities in a new line"
            ></textarea>
          </div>
          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* submit */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
