import { Grid } from '@mui/material'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <Grid container justifyContent={'center'}>
        <Grid item xs={9.4}>
            {children}
        </Grid>
    </Grid>
  )
}

export default MainLayout