import { Box, Typography } from '@mui/material'
import React from 'react'
import  styles from './news.module.css'

const NewsLetter = () => {
    return (
        <Box p={3} pb={5} mt={3} sx={{ display: 'flex', boxSizing: 'border-box', flexDirection: 'column', boxShadow: '0px 4px 4px rgba(0,0,0,0.1)', backgroundColor: 'white', width: '100%', borderRadius: '7px' }}>
            <Typography mb={2} variant='body1' fontWeight={600}>NEWSLETTER</Typography>

            <Typography sx={{color:'gray'}}>Subscribe for our daily news</Typography>
            <Box mt={2} sx={{display:'flex', width:'100%',}}>
            <input className={styles.textField} placeholder='your email'  />
            <button className={styles.btn}>SIGN UP</button>  
            </Box>
        </Box>
    )
}

export default NewsLetter