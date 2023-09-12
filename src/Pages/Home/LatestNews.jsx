import React from 'react'
import ImageCard from '../../components/ImageCard'
import TextCard from '../../components/TextCard'
import img1 from '../../assets/card/grid_post_1.jpg'
import img2 from '../../assets/card/grid_post_2.jpg'
import img3 from '../../assets/card/grid_post_3.jpg'
import img4 from '../../assets/card/grid_post_4.jpg'

import { Box, Grid, Typography } from '@mui/material'
import PopularPosts from '../../components/PopularPosts'
import NewsLetter from '../../components/NewsLetter'
import Socials from '../../components/Socials'

const LatestNews = () => {
    return (
        <Grid mt={2} py={2} container justifyContent={'space-between'} >
            <Grid item xs={7.9} sx={{ borderTop: '3px solid gray' }}>
                <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>

                    <Box mb={3} sx={{ display: 'flex' }}>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}>LATEST NEWS</Typography>
                        {/* add navigation here */}
                    </Box>

                    <Box sx={{ display: 'flex', columnGap: '30px' }}>
                        <Box sx={{ width: '50%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <ImageCard styles={{ height: '270px', width: '100%', }} chipStyles={{top:'75%', left:'5%', backgroundColor:'blue'}} text={'world'} src={img1} />
                                <TextCard styles={{ height: 'fit-content', width: '100%' }} variant={'h6'} text={'Follow These Smartphone Habits of Successful Entrepreneurs'} sText={'iPrice Group report offers insights on daily e-commerce activity in the ...'}/>
                            </Box>
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <ImageCard styles={{ height: '270px', width: '100%', }} chipStyles={{top:'75%', left:'5%', backgroundColor:'blue'}} text={'world'} src={img2} />
                                <TextCard styles={{ height: 'fit-content', width: '100%' }} variant={'h6'} text={'Follow These Smartphone Habits of Successful Entrepreneurs'} sText={'iPrice Group report offers insights on daily e-commerce activity in the ...'}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box mt={4} sx={{ display: 'flex', columnGap: '30px' }}>
                        <Box sx={{ width: '50%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <ImageCard styles={{ height: '270px', width: '100%', }} chipStyles={{top:'75%', left:'5%', backgroundColor:'blue'}} text={'world'} src={img3} />
                                <TextCard styles={{ height: 'fit-content', width: '100%' }} variant={'h6'} text={'Follow These Smartphone Habits of Successful Entrepreneurs'} sText={'iPrice Group report offers insights on daily e-commerce activity in the ...'}/>
                            </Box>
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <ImageCard styles={{ height: '270px', width: '100%', }} chipStyles={{top:'75%', left:'5%', backgroundColor:'blue'}} text={'world'} src={img4} />
                                <TextCard styles={{ height: 'fit-content', width: '100%' }} variant={'h6'} text={'Follow These Smartphone Habits of Successful Entrepreneurs'} sText={'iPrice Group report offers insights on daily e-commerce activity in the ...'}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={3.7}>
                <PopularPosts />
                <NewsLetter />
                <Socials />
            </Grid>
        </Grid>
    )
}

export default LatestNews