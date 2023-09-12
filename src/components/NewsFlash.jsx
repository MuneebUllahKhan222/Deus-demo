import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import { useEffect } from 'react';
import  styles from './news.module.css'

const NewsFlash = () => {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const news = ['8 Hidden Costs of Starting and Running a Business', 'Satelite cost tens of millions or even hundreds of millions of dollars to build', 'A-HA theme is multi-purpose solution for any kind of business']

    const updateString = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % news.length);
          setIsTransitioning(false); // Turn off the transition effect after the delay
        }, 300);
      };

      const startInterval = () => {
        clearInterval(intervalId); // Clear any existing interval
        const newIntervalId = setInterval(updateString, 3000);
        setIntervalId(newIntervalId);
      };

      useEffect(() => {
        startInterval(); // Start the interval when the component mounts
    
        return () => {
          clearInterval(intervalId); // Clear the interval when the component unmounts
        };
      }, []); // 

      const resetInterval = () => {
          clearInterval(intervalId);
        setCurrentStringIndex(prev =>  (prev + 1) % news.length)
        // startInterval();
      };

  return (
    <Box sx={{display:'flex', borderRadius:'5px', boxShadow:'4px 4px 6px rgba(0, 0, 0, 0.1)', width:'100%', backgroundColor:'white'}}>
        <Box py={1} px={3} sx={{display:'flex', boxSizing:'border-box', alignItems:'center', backgroundColor:'#2d95e3', borderRadius:'5px 0px 0px 5px'}}>
            <Typography variant='caption' fontWeight={600} sx={{color:'white'}}>NEWS FLASH</Typography>
        </Box>
        <Box ml={3} sx={{display:'flex', alignItems:'center', }}>
            <Typography  className={isTransitioning ? styles.transitionUp : ''} variant='body2'>{news[currentStringIndex]}</Typography>
        </Box>
        <Box sx={{display:'flex', flex:1}} />
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Box sx={{borderRight:'1px solid black'}}>
            <IconButton onClick={resetInterval}>
            <ChevronLeftIcon  />
            </IconButton>
            </Box>
            <IconButton  onClick={resetInterval}>
            <ChevronRightIcon />
            </IconButton>
        </Box>
    </Box>
  )
}

export default NewsFlash