import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import NewsFlash from '../../components/NewsFlash'
import Section1 from './Section1'
import LatestNews from './LatestNews'
import placeholder from '../../assets/card/placeholder_728.jpg'
import img1 from '../../assets/content/thumb_post_1.jpg'
import img2 from '../../assets/content/thumb_post_2.jpg'
import img3 from '../../assets/content/thumb_post_3.jpg'
import img4 from '../../assets/content/thumb_post_4.jpg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EditorsPick from './EditorsPick'
import Info from './Info'
import Videos from './Videos'

const infoProps = [
  {
    img: img1,
    heading: 'TECHNOLOGY',
    texts: ['Need a Website for Your Business? Google Can Help', 'Here Are Ways You Can Earn From the Sharing Economy', "19 Crazy Facts You Probably Didn't Know About Google", "What Household Chores Would Filipinos Love to Assign to Robots?"]
  },
  {
    img: img2,
    heading: 'TRAVEL',
    texts: ['5 deadliest luxury vacation spots on Earth', 'These 4 startups can send you to work and travel abroad', "9 mind-blowing travel destinations for adventure seekers", "These Small Business Ideas Are Great for Entrepreneurial Children"]
  },
  {
    img: img3,
    heading: 'CRYPTOCURRENCY',
    texts: ['Need a Website for Your Business? Google Can Help', 'Here Are Ways You Can Earn From the Sharing Economy', "19 Crazy Facts You Probably Didn't Know About Google", "What Household Chores Would Filipinos Love to Assign to Robots?"]
  },
  {
    img: img4,
    heading: 'INVESTMENT',
    texts: ['Need a Website for Your Business? Google Can Help', 'Here Are Ways You Can Earn From the Sharing Economy', "19 Crazy Facts You Probably Didn't Know About Google", "What Household Chores Would Filipinos Love to Assign to Robots?"]
  },
]

const HomeView = () => {
  return (
    <HomeLayout>

      <Box py={2} sx={{ display: 'flex', }}>
        <NewsFlash />
      </Box>
      <Section1 />
      <LatestNews />
      <Box my={2} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Box component={'img'} src={placeholder} width={'60%'} height={'85px'} sx={{ cursor: 'pointer' }} />
      </Box>

      <EditorsPick />

      <Grid container justifyContent={'space-between'}>
        <Grid item xs={5.8} sx={{ borderTop: '3px solid gray' }}>
          <Info {...infoProps[0]} />
        </Grid>
        <Grid item xs={5.8} sx={{ borderTop: '3px solid gray' }}>
          <Info {...infoProps[1]} />
        </Grid>
        <Grid item xs={5.8} sx={{ borderTop: '3px solid gray' }}>
          <Info {...infoProps[2]} />
        </Grid>
        <Grid item xs={5.8} sx={{ borderTop: '3px solid gray' }}>
          <Info {...infoProps[3]} />
        </Grid>
      </Grid>

      <Videos />
    </HomeLayout>
  )
}

export default HomeView