import { Box, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavigationTabs = () => {
  return (
    <Box ml={3} sx={{display:'flex', height:'100%'}}>
        <Box px={1}  sx={{height:'100%', alignItems:'center', display:'flex', '&:hover':{ borderBottom:'2px solid #2d95e3', cursor:'pointer', '& .text': {color:'#2d95e3'}}}}>
            <Typography className='text' mr={1} variant='subtitle2' fontWeight={600} sx={{'&:hover .red': {color:'blue'}}}>HOME</Typography>
            <KeyboardArrowDownIcon className='text' sx={{fontSize:'15px'}} />
        </Box>
        <Box px={1}  sx={{height:'100%', alignItems:'center', display:'flex', '&:hover':{ borderBottom:'2px solid #2d95e3', cursor:'pointer', '& .text': {color:'#2d95e3'}}}}>
            <Typography className='text' mr={1} variant='subtitle2' fontWeight={600} sx={{'&:hover .red': {color:'blue'}}}>POSTS</Typography>
            <KeyboardArrowDownIcon className='text' sx={{fontSize:'15px'}} />
        </Box>
        <Box px={1}  sx={{height:'100%', alignItems:'center', display:'flex', '&:hover':{ borderBottom:'2px solid #2d95e3', cursor:'pointer', '& .text': {color:'#2d95e3'}}}}>
            <Typography className='text' mr={1} variant='subtitle2' fontWeight={600} sx={{'&:hover .red': {color:'blue'}}}>PAGES</Typography>
            <KeyboardArrowDownIcon className='text' sx={{fontSize:'15px'}} />
        </Box>
        <Box px={1}  sx={{height:'100%', alignItems:'center', display:'flex', '&:hover':{ borderBottom:'2px solid #2d95e3', cursor:'pointer', '& .text': {color:'#2d95e3'}}}}>
            <Typography className='text' mr={1} variant='subtitle2' fontWeight={600} sx={{'&:hover .red': {color:'blue'}}}>FEATURES</Typography>
            <KeyboardArrowDownIcon className='text' sx={{fontSize:'15px'}} />
        </Box>
        <Box px={1}  sx={{height:'100%', alignItems:'center', display:'flex', '&:hover':{ borderBottom:'2px solid #2d95e3', cursor:'pointer', '& .text': {color:'#2d95e3'}}}}>
            <Typography className='text' mr={1} variant='subtitle2' fontWeight={600} sx={{'&:hover .red': {color:'blue'}}}>PURCHASE</Typography>
            <KeyboardArrowDownIcon className='text' sx={{fontSize:'15px'}} />
        </Box>
    </Box>
  )
}

export default NavigationTabs