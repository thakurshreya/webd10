import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddJobs.css'; // Import the CSS file for styling

function AddJobPage() {
  const [job, setJob] = useState({
    companyName: '',
    jobTitle: '',
    description: '',
    salary: ''
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJob(prevJob => ({
      ...prevJob,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Assuming you convert salary input to a number before sending to the server.
      const preparedJob = {
        ...job,
        salary: Number(job.salary)
      };

      const response = await fetch('http://localhost:8000/create/job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(preparedJob)
      });
      if (response.ok) {
        alert('Job added successfully!');
        setJob({ companyName: '', jobTitle: '', description: '', salary: '' }); // Reset form after successful posting
      } else {
        throw new Error('Failed to add job');
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user from local storage
    navigate('/login'); // Redirect to the login page
  };

  const navigateToListEmployees = () => {
    navigate('/employeeslist'); // Navigate to ListEmployees page
  };

  return (
    <div className="addJobContainer">
      <div className="topRightButtons">
        <button onClick={navigateToListEmployees}>List Employees</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h1>Add a Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={job.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={job.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={job.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={job.salary}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default AddJobPage;
