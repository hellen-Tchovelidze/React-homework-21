import React, { useState, useEffect } from "react";
import jobData from "./data.json";
import FilterBar from "./Components/__moleculos/FilterBar/FilterBar";
import JobList from "./Components/__organisms/JobList/JobList";

const App: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredJobs(jobData);
    } else {
      setFilteredJobs(
        jobData.filter((job) =>
          selectedFilters.every((filter) =>
            [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
          )
        )
      );
    }
  }, [selectedFilters]);

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  return (
    <div className="bg-[#EFFAFA] min-h-screen p-6 bg-[url(./assets/images/bgImage.png)] bg-no-repeat bg-top bg-contain  ">
     <div className=" mt-[10%] ">
     <FilterBar filters={selectedFilters} removeFilter={removeFilter} />
     <JobList jobs={filteredJobs} addFilter={addFilter} />
     </div>
    </div>
  );
};

export default App;
