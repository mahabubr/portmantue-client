import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addContentData from '../../../Redux/Thunk/Content/addContentData';

const AddContent = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()

    const current = new Date()
    const currentTime = current.toLocaleTimeString()
    const currentDate = current.toLocaleDateString()
    const currentTimeAndDateValue = `${currentTime} ${currentDate}`


    const onSubmit = data => {
        const inputValue = {
            title: data.title,
            description: data.description,
            date_time: currentTimeAndDateValue,
            tags: [data.tag1, data.tag2, data.tag3, data.tag4]
        }
        dispatch(addContentData(inputValue))
    };

    return (
        <Box sx={{
            mt: '100px'
        }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("title")} id="standard-basic" label="Title" fullWidth variant="standard" />
                <TextField
                    {...register("description")}
                    sx={{
                        mt: '20px'
                    }}
                    id="filled-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    fullWidth
                    variant="filled"
                />
                <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TextField {...register("tag1")} id="outlined-basic" label="Tag" variant="outlined" />
                    <TextField {...register("tag2")} id="outlined-basic" label="Tag" variant="outlined" />
                    <TextField {...register("tag3")} id="outlined-basic" label="Tag" variant="outlined" />
                    <TextField {...register("tag4")} id="outlined-basic" label="Tag" variant="outlined" />
                </Box>
                <Button type='submit'
                    sx={{ margin: '20px auto', py: "10px" }} fullWidth
                    variant="contained">
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default AddContent;