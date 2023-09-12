import { Box, Typography } from '@mui/material'
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../assets/carousel/carousel_post_1.jpg'
import img2 from '../../assets/carousel/carousel_post_2.jpg'
import img3 from '../../assets/carousel/carousel_post_3.jpg'
import img4 from '../../assets/carousel/carousel_post_4.jpg'
import img5 from '../../assets/carousel/carousel_post_5.jpg'
import img6 from '../../assets/carousel/carousel_post_6.jpg'
import img7 from '../../assets/carousel/carousel_post_7.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <Box  mr={4} onDragStart={handleDragStart}  src={img1}   height={'190px'}  role="presentation" sx={{backgroundImage:`url(${img1})`,display:'flex', paddingBottom:'15px', boxSizing:'border-box', color:'white', alignItems:'flex-end', justifyContent:'center', borderRadius:'7px', textAlign:'center'}} >
        <Typography variant='subtitle1' fontWeight={600}>Is uber considering to sell it's south asis business</Typography>
    </Box>,
    <Box  mr={4} onDragStart={handleDragStart}  src={img1}   height={'190px'}  role="presentation" sx={{backgroundImage:`url(${img2})`,display:'flex', paddingBottom:'15px', boxSizing:'border-box', color:'white', alignItems:'flex-end', justifyContent:'center', borderRadius:'7px', textAlign:'center'}} >
        <Typography variant='subtitle1' fontWeight={600}>Is uber considering to sell it's south asis business</Typography>
    </Box>,
    <Box  mr={4} onDragStart={handleDragStart}  src={img1}   height={'190px'}  role="presentation" sx={{backgroundImage:`url(${img3})`,display:'flex', paddingBottom:'15px', boxSizing:'border-box', color:'white', alignItems:'flex-end', justifyContent:'center', borderRadius:'7px', textAlign:'center'}} >
        <Typography variant='subtitle1' fontWeight={600}>Is uber considering to sell it's south asis business</Typography>
    </Box>,
    <Box  mr={4} onDragStart={handleDragStart}  src={img1}   height={'190px'}  role="presentation" sx={{backgroundImage:`url(${img4})`,display:'flex', paddingBottom:'15px', boxSizing:'border-box', color:'white', alignItems:'flex-end', justifyContent:'center', borderRadius:'7px', textAlign:'center'}} >
        <Typography variant='subtitle1' fontWeight={600}>Is uber considering to sell it's south asis business</Typography>
    </Box>,
    <Box  mr={4} onDragStart={handleDragStart}  src={img1}   height={'190px'}  role="presentation" sx={{backgroundImage:`url(${img5})`,display:'flex', paddingBottom:'15px', boxSizing:'border-box', color:'white', alignItems:'flex-end', justifyContent:'center', borderRadius:'7px', textAlign:'center'}} >
        <Typography variant='subtitle1' fontWeight={600}>Is uber considering to sell it's south asis business</Typography>
    </Box>,
    <Box  mr={4} onDragStart={handleDragStart}  src={img1}   height={'190px'}  role="presentation" sx={{backgroundImage:`url(${img6})`,display:'flex', paddingBottom:'15px', boxSizing:'border-box', color:'white', alignItems:'flex-end', justifyContent:'center', borderRadius:'7px', textAlign:'center'}} >
        <Typography variant='subtitle1' fontWeight={600}>Is uber considering to sell it's south asis business</Typography>
    </Box>,
    <Box  mr={4} onDragStart={handleDragStart}  src={img1}   height={'190px'}  role="presentation" sx={{backgroundImage:`url(${img7})`,display:'flex', paddingBottom:'15px', boxSizing:'border-box', color:'white', alignItems:'flex-end', justifyContent:'center', borderRadius:'7px', textAlign:'center'}} >
        <Typography variant='subtitle1' fontWeight={600}>Is uber considering to sell it's south asis business</Typography>
    </Box>,
    
  ];

const EditorsPick = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };

    

  return (
    <Box mt={8} mb={8} sx={{display:'flex', flexDirection:'column', borderTop :'3.5px solid gray'}}>
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography my={4} variant='h5' fontWeight={600}>Editors Picks</Typography>
        
        </Box>

            <AliceCarousel 
                mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
        disableDotsControls

            />
    </Box>
  )
}

export default EditorsPick