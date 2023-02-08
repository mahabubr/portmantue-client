import { Box, Button, CardActions, CardContent, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getContentData from '../../Redux/Thunk/Content/getProductData';
import ReadingHistory from '../ReadingHistory/ReadingHistory';

const Home = () => {

    const contentData = useSelector(state => state.content.content)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContentData())
    }, [dispatch])

    return (
        <Box component="span"
            sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', mt: '50px', gap: '28px' }} textAlign='center'>
            {
                contentData?.map(content =>
                    <Box onClick={() => dispatch(ReadingHistory(content))} key={content._id}>
                        <CardContent sx={{ border: '1px solid gray' }}>
                            <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
                                {content.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {content.description}
                            </Typography>
                            {
                                content?.key_tags?.map((tag, i) => <Typography key={i} variant="body2">{tag}</Typography>)
                            }
                        </CardContent>
                    </Box>
                )
            }
        </Box>
    );
};

export default Home;