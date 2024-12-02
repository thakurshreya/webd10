import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/loginActions';

const AdminNavbar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Admin Portal
                </Typography>
                <Button color="inherit" component={Link} to="/admin">Home</Button>
                <Button color="inherit" component={Link} to="/addJobs">Add Jobs</Button>
                <Button color="error" onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default AdminNavbar;