import { Grid } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'

const HomeLayout = ({children}) => {
  return (
    <>
    <Grid container justifyContent={'center'} sx={{backgroundColor:'#f7f7f7'}}>
        <Grid item xs={9.4}>
            {children}
        </Grid>
    </Grid> 
    <Footer />
    </>
  )
}

export default HomeLayout