// src/pages/Jobs/Jobs.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../../components/Navbar"; // Import Navbar, adjust the path as needed
import './job.css'; // Ensure you have a CSS file for Jobs

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="jobsContainer">
      <Navbar /> {/* Added Navbar to the top of the page */}
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h2>{job.jobTitle} at {job.companyName}</h2>
            <p>{job.description}</p>
            <p>Salary: ${job.salary.toLocaleString()}</p>
            <button>Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jobs;
