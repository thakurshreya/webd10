import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

const EmployeesList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/user/getAll');
                setUsers(response.data);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                User Management
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user._id} // Assuming there's a unique _id field from MongoDB
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {user.fullName}
                                </TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right">{user.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default EmployeesList;
