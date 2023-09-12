import { Box, Typography } from '@mui/material'
import React from 'react'
import img1 from '../assets/card/grid_post_1.jpg'
import img2 from '../assets/card/grid_post_2.jpg'
import img3 from '../assets/card/grid_post_3.jpg'
import img4 from '../assets/card/grid_post_4.jpg'


const Posts = (props) => {
    const { postsArr } = props;
    return (
        <>
            {
                postsArr?.map((post, i) => (
                    <Box key={i} my={2} sx={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>
                        <Box src={post?.img} component={'img'} width={90} height={'90px'} sx={{ borderRadius: '100%' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant={'subtitle2'} sx={{ '&:hover': { color: '#2d95e3', cursor: 'pointer' } }} fontWeight={600}>{post?.text}</Typography>
                            <Typography variant='overline' sx={{ color: 'gray' }}>By <Typography variant='overline' sx={{ color: '#2d95e3' }} component={'span'}>Deothemes .</Typography>JAN 21,2018</Typography>

                        </Box>
                    </Box>
                ))
            }
        </>
    )


}

const postsArr = [
    {
        text: "Follow These Smartphone Habits of Successful Entrepreneurs",
        img: img1
    },
    {
        text: "Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire",
        img: img2
    },
    {
        text: "June in Africa: Taxi wars, smarter cities and increased investments",
        img: img3
    },
    {
        text: "PUBG Desert Map Finally Revealed, Here Are All The Details",
        img: img4
    },
]


const PopularPosts = (props) => {
    return (
        <Box p={3} sx={{ display: 'flex', boxSizing: 'border-box', flexDirection: 'column',boxShadow: '0px 4px 4px rgba(0,0,0,0.1)', backgroundColor: 'white', width: '100%', borderRadius: '7px' }}>
            <Typography mb={2} variant='body1' fontWeight={600}>POPULAR POSTS</Typography>
            <Posts postsArr={postsArr} />
        </Box>
    )
}

export default PopularPosts