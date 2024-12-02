import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListEmployees.css';

function AdminPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/user/getAll');
     console.log(response) 
     if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setError(`Failed to fetch: ${error.message}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user from local storage
    navigate('/login'); // Navigate to the login page
  };

  const navigateToAddJobs = () => {
    navigate('/add-jobs'); // Navigate to Add Jobs page
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="topRightButtons">
        <button onClick={handleLogout} className="topRightButton">Logout</button>
        <button onClick={navigateToAddJobs} className="topRightButton">Add Jobs</button>
      </div>
      <h1>Employee Directory</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
