import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import img1 from '../assets/card/grid_post_1.jpg'
import img2 from '../assets/card/grid_post_2.jpg'
import  styles from './news.module.css'




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
]

const Footer = () => {
    return (
        <Box py={8} px={3} sx={{ backgroundColor: '#171821', color: 'white', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '75%', display: 'flex', justifyContent: 'space-between', columnGap: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h4' fontWeight={600}>Deus</Typography>
                    <Typography mt={4} variant='subtitle2' sx={{ color: '#747881' }}>© 2018 Deus | Made by DeoThemes</Typography>
                    <Box mt={3} sx={{ display: 'flex', columnGap: '10px', flexWrap: 'wrap' }}>
                        <IconButton sx={{ backgroundColor: '#39599f' }}>
                            <FacebookOutlinedIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton sx={{ backgroundColor: '#55acee' }}>
                            <TwitterIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton sx={{ backgroundColor: '#e1306c' }}>
                            <InstagramIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton sx={{ backgroundColor: '#de4b39' }}>
                            <GoogleIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton sx={{ backgroundColor: '#c61d23' }}>
                            <YouTubeIcon sx={{ color: 'white' }} />
                        </IconButton>

                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='body1' mb={2} fontWeight={600}>USEFUL LINKS</Typography>
                    <Typography variant='body2' mb={1} fontWeight={500}>About</Typography>
                    <Typography variant='body2' mb={1} fontWeight={500}>News</Typography>
                    <Typography variant='body2' mb={1} fontWeight={500}>Advertise</Typography>
                    <Typography variant='body2' mb={1} fontWeight={500}>Support</Typography>
                    <Typography variant='body2' mb={1} fontWeight={500}>Feature</Typography>
                    <Typography variant='body2' mb={1} fontWeight={500}>Contact</Typography>
                </Box>

                <Box p={3} pt={0} sx={{ display: 'flex', width: '36%', boxSizing: 'border-box', flexDirection: 'column', borderRadius: '7px', color: 'white' }}>
                    <Typography mb={2} variant='body1' fontWeight={600}>POPULAR POSTS</Typography>
                    <Posts postsArr={postsArr} />
                </Box>


                <Box p={3} pt={0} pb={5} mt={0} sx={{ display: 'flex', boxSizing: 'border-box', flexDirection: 'column', width: 'fit-content', borderRadius: '7px' }}>
                    <Typography mb={2} variant='body1' fontWeight={600}>NEWSLETTER</Typography>

                    <Typography sx={{ color: 'gray' }}>Subscribe for our daily news</Typography>
                    <Box mt={2} sx={{ display: 'flex', width: '100%', }}>
                        <input className={styles.textField} placeholder='your email' />
                        <button className={styles.btn}>SIGN UP</button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer