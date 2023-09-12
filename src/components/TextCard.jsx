import { Box, Typography } from '@mui/material'
import React from 'react'

const TextCard = (props) => {
    const { variant, text, styles, sText } = props;
  return (
    <Box pt={2.5} pb={3} px={3.3} sx={{display:'flex', flexDirection:'column', ...styles, backgroundColor:'white', boxSizing:'border-box', boxShadow:'0px 4px 4px rgba(0,0,0,0.1)', borderRadius:'4px 0px 0px 4px' }}>
        <Typography variant={variant ?? 'subtitle1'} sx={{'&:hover' :{color:'#2d95e3', cursor:'pointer'}}} fontWeight={600}>{text ?? '3 Founders With Booming Businesses Share Stories About Their Difficult Early'}</Typography>
        <Typography variant='overline' sx={{color:'gray'}}>By <Typography variant='overline' sx={{color:'#2d95e3'}} component={'span'}>Deothemes .</Typography>JAN 21,2018</Typography>
        <Typography my={2} sx={{color:'gray'}}>
            {sText ? sText : ''}
        </Typography>
    </Box>
  )
}

export default TextCard