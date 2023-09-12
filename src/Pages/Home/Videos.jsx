import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ImageCard from '../../components/ImageCard'
import img1 from '../../assets/card/grid_post_5.jpg'
import img2 from '../../assets/card/grid_post_6.jpg'
import TextCard from '../../components/TextCard'



const Videos = () => {
    return (
        <Box mt={3} mb={8} sx={{ display: 'flex', flexDirection: 'column', borderTop: '3px solid gray' }}>
            <Box sx={{ display: 'flex' }}>
                <Typography my={5} variant='h5' fontWeight={600}>
                    VIDEOS
                </Typography>
            </Box>

            <Grid container justifyContent={'space-between'}>
                <Grid item xs={5.8}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <ImageCard styles={{ width: '100%', height: '330px' }} src={img1} chipStyles={{ top: '80%', left: '5%', backgroundColor: '#2d95e3' }} text={'> 3:21'} />
                        <TextCard styles={{ height: 'fit-content', width: '100%' }} variant={'h6'} text={'What Days and Hours are PH Online Shoppers Most Likely to Buy?'} sText={'iPrice Group report offers insights on daily e-commerce activity in the ...'}/>
                    </Box>
                </Grid>
                <Grid item xs={5.8}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <ImageCard styles={{ width: '100%', height: '330px' }} src={img2} chipStyles={{ top: '80%', left: '5%', backgroundColor: '#2d95e3' }} text={'> 3:21'} />
                        <TextCard styles={{ height: 'fit-content', width: '100%' }} variant={'h6'} text={'What Days and Hours are PH Online Shoppers Most Likely to Buy?'} sText={'iPrice Group report offers insights on daily e-commerce activity in the ...'}/>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Videos