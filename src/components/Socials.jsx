import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const Socials = () => {
    return (
        <Box p={3} pb={5} mt={6} sx={{ display: 'flex', boxSizing: 'border-box', flexDirection: 'column', boxShadow: '0px 4px 4px rgba(0,0,0,0.1)', backgroundColor: 'white', width: '100%', borderRadius: '7px' }}>
            <Typography mb={2} variant='body1' fontWeight={600}>LET'S HANG OUT ON SOCIAL</Typography>

            <Grid container justifyContent={'space-between'}>
                <Grid item xs={5.5} flexDirection={'column'} >
                    <Button sx={{ paddingY: '10px', backgroundColor: '#39599f', color: 'white', fontWeight: 600, '&:hover': { backgroundColor: '#39599f' }, width: '100%' }} >
                        <FacebookOutlinedIcon sx={{ marginRight: '4px' }} />
                        FACEBOOK
                    </Button>
                    <Button sx={{ marginTop: '15px', paddingY: '10px', backgroundColor: '#55acee', color: 'white', fontWeight: 600, '&:hover': { backgroundColor: '#55acee' }, width: '100%' }} >
                        <TwitterIcon sx={{ marginRight: '4px', }} />
                        Twitter
                    </Button>
                    <Button sx={{ marginTop: '15px', paddingY: '10px', backgroundColor: '#c61d23', color: 'white', fontWeight: 600, '&:hover': { backgroundColor: '#c61d23' }, width: '100%' }} >
                        <YouTubeIcon sx={{ marginRight: '4px', }} />
                        Youtube
                    </Button>
                </Grid>
                <Grid item xs={5.5}>
                    <Button sx={{ paddingY: '10px', backgroundColor: '#e1306c', color: 'white', fontWeight: 600, '&:hover': { backgroundColor: '#e1306c' }, width: '100%' }} >
                        <InstagramIcon sx={{ marginRight: '4px' }} />
                        Instagram
                    </Button>
                    <Button sx={{ marginTop: '15px', paddingY: '10px', backgroundColor: '#de4b39', color: 'white', fontWeight: 600, '&:hover': { backgroundColor: '#de4b39' }, width: '100%' }} >
                        <GoogleIcon sx={{ marginRight: '4px', }} />
                        Google +
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Socials