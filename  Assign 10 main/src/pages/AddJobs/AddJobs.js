import React, { useState } from 'react';
import axios from 'axios';

function AddJobs() {
  const [job, setJob] = useState({
    companyName: '',
    jobTitle: '',
    description: '',
    salary: ''
  });

  // Function to handle changes in form inputs
  const handleChange = e => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  // Function to handle the form submission
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/create/job', job);
      // Alert success if the request is successful
      if (response.status === 200) {
        alert('Job created successfully!');
        // Optionally reset the form fields after successful submission
        setJob({ companyName: '', jobTitle: '', description: '', salary: '' });
      } else {
        // Provide a more detailed error message from the server if available
        alert(`Failed to create job: ${response.data.message}`);
      }
    } catch (error) {
      // Handle errors in case the server is unreachable or returns an error
      alert(`Failed to create job: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div>
      <h1>Add Job Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          onChange={handleChange}
          value={job.companyName}
          required
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          onChange={handleChange}
          value={job.jobTitle}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          onChange={handleChange}
          value={job.description}
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
          value={job.salary}
          required
        />
        <button type="submit">Create Job</button>
      </form>
    </div>
  );
}

export default AddJobs;
