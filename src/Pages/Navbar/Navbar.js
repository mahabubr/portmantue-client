import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",
            textDecoration: "none",
        }}>
            <Link style={{ textDecoration: "none" }} to='/'>
                <Button variant="contained">Home</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to='/reading-history'>
                <Button variant="contained">Reading History</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to='/add-content'>
                <Button variant="contained">Add Content</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to='/all-content'>
                <Button variant="contained">All Content</Button>
            </Link>
        </Box>
    );
};

export default Navbar;