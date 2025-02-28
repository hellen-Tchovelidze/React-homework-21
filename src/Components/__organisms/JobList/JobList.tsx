import React from "react";
import JobCard from "../JobCard/JobCard";

type JobListProps = {
  jobs: any[];
  addFilter: (filter: string) => void;
};

const JobList: React.FC<JobListProps> = ({ jobs, addFilter }) => {
  return (
    <div className="mt-6 space-y-4  ">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} addFilter={addFilter} />
      ))}
    </div>
  );
};

export default JobList;
