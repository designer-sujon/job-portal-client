import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const jobApplications = useLoaderData()
    return (
        <div>
            <h2 className='text-3xl'>Applications for this job: {jobApplications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobApplications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td><select 
                                defaultValue={app.status || "Change Status"}
                                className="select select-bordered w-full max-w-xs">
                                    <option disabled>Change Status</option>
                                    <option>Under Review</option>
                                    <option>set Interview</option>
                                    <option>Hired</option>
                                    <option>Rejected</option>
                                </select></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;