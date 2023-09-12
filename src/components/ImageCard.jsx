import { Box, Typography } from '@mui/material'
import React from 'react'

const ImageCard = (props) => {
    const { styles, src, chipStyles, text } = props;
    // console.log(src, styles, props)
  return (
    <Box sx={{...styles, cursor:'pointer', position:'relative'}}>
        <Box src={src} component={'img'} height={'100%'} width={'100%'} sx={{borderRadius:'0px 4px 4px 0px'}} />
        <Box py={0.8} px={1.2} sx={{position:'absolute', ...chipStyles, borderRadius:'8px'}}>
            <Typography sx={{color:'white', fontSize:'0.6rem', fontWeight:'600'}}>{text.toUpperCase()}</Typography>
        </Box>
    </Box>
  )
}

export default ImageCard