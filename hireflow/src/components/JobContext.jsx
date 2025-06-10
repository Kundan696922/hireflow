// src/context/JobContext.jsx

import React, { createContext, useState } from "react";
import JobDataInitial from "./JobData";

export const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState(JobDataInitial);

  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
}
