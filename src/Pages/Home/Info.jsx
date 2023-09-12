import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Info = (props) => {
    const { img, heading, texts } = props;
    return (
        <Box my={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h5' fontWeight={600}>{heading}</Typography>
            <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }} >
                <Box p={2} sx={{ width: '45%', borderRadius: '8px', backgroundImage: `url(${img})`, backgroundSize: '100% 100%', height: '300px', alignItems: 'flex-start', boxSizing: 'border-box', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant={'h6'} sx={{ color: 'white', '&:hover': { color: 'white', cursor: 'pointer' } }} fontWeight={600}>Gov’t Toughens Rules to Ensure 3rd Telco Player Doesn’t Slack Off</Typography>
                    <Typography variant='overline' fontWeight={700} sx={{ color: 'white' }}>By <Typography fontWeight={700} variant='overline' sx={{ color: 'white' }} component={'span'}>Deothemes .</Typography>JAN 21,2018</Typography>
                </Box>
                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                    {
                        texts?.map((text, i) => (
                            <Box key={i}>
                                <Box  sx={{ display: 'flex', columnGap: '8px' }}>
                                    <KeyboardArrowRightIcon sx={{ color: '#2d95e3' }} />
                                    <Typography variant='body2' fontWeight={600} sx={{ cursor: 'pointer', '&:hover': { color: '#2d95e3' } }}>{text}</Typography>
                                </Box>
                                <Divider />
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>

    )
}

export default Info