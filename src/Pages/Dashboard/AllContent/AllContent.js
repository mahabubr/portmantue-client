import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getContentData from '../../../Redux/Thunk/Content/getProductData';
import { GrUpdate } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import deleteContentData from '../../../Redux/Thunk/Content/deleteContentData';
import updateContentData from '../../../Redux/Thunk/Content/updateContentData';

const AllContent = () => {

    const content = useSelector(state => state.content.content)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     fetch('http://localhost:5000/content')
    //         .then(res => res.json())
    //         .then(data => {
    //             dispatch(addContent(data))
    //         })
    // })

    useEffect(() => {
        dispatch(getContentData())
    }, [dispatch])

    return (
        <Box sx={{ mt: '50px' }} style={{ height: '100vh', width: '100%' }}>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {content.map((row, i) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {i + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.description}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <AiFillDelete size={25} color="red" onClick={() => dispatch(deleteContentData(row._id))} />
                                        <GrUpdate onClick={() => dispatch(updateContentData(row))} size={25} color="blue" />
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AllContent;