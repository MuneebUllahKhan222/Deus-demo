import React from 'react'
import ImageCard from '../../components/ImageCard'
import img1 from '../../assets/card/hero_post_1.jpg'
import img2 from '../../assets/card/hero_post_3.jpg'
import img3 from '../../assets/card/hero_post_5.jpg'
import img4 from '../../assets/card/hero_post_4.jpg'
import TextCard from '../../components/TextCard'
import { Box, Grid, Typography } from '@mui/material'


const Section1 = () => {
  return (
    <Grid py={2} container columnSpacing={'8px'}>
    <Grid item xs={6}>
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <Box sx={{ display: 'flex' }}>
          <TextCard styles={{ height: '180px', width: '50%' }} />
          <ImageCard styles={{ height: '180px', width: '50%' }} chipStyles={{top:'75%', left:'5%', backgroundColor:'blue'}} text={'world'} src={img1} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <TextCard styles={{ height: '180px', width: '50%' }} />
          <ImageCard styles={{ height: '180px', width: '50%' }} chipStyles={{top:'75%', left:'5%', backgroundColor:'purple'}} text={'lifestyle'} src={img2} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <TextCard styles={{ height: '180px', width: '50%' }} />
          <ImageCard styles={{ height: '180px', width: '50%' }} chipStyles={{top:'75%', left:'5%', backgroundColor:'blue'}} text={'business'} src={img3} />
        </Box>
      </Box>
    </Grid>
    <Grid item xs={6}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height:'100%' }}>
        <ImageCard styles={{ height: '65%', width: '100%' }} src={img4} text={'lifestyle'} chipStyles={{top:'85%', left:'5%', backgroundColor:'green'}}  />
        <TextCard styles={{ height: '35%', width: '100%' }} variant={'h4'} />
      </Box>
    </Grid>
  </Grid>
  )
}

export default Section1