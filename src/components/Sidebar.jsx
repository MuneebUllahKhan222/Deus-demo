import { Box, Divider, Drawer, IconButton, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = (props) => {
    const { open, handleClose } = props;
    return (
        <Drawer
            anchor='left'
            open={open}
            onClose={() => handleClose()}
        >
            <Box pt={2} sx={{ width: '20vw', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                <Box pr={2} sx={{ display: 'flex', justifyContent: 'flex-end', boxSizing: 'border-box' }}>
                    <IconButton>
                        <CloseIcon onClick={() => handleClose()} sx={{ cursor: 'pointer' }} />
                    </IconButton>
                </Box>

                <Box sx={{cursor:'pointer', '&:hover':{color:'#2d95e3'}}}>
                <Typography mb={2} mt={2} ml={2}>Home</Typography>
                </Box>
                <Divider />
                <Box sx={{cursor:'pointer', '&:hover':{color:'#2d95e3'}}}>
                <Typography mb={2} mt={2} ml={2}>Pages</Typography>
                </Box>
                <Divider />
                <Box sx={{cursor:'pointer', '&:hover':{color:'#2d95e3'}}}>
                <Typography mb={2} mt={2} ml={2}>Fashion</Typography>
                </Box>
                <Divider />
                <Box sx={{cursor:'pointer', '&:hover':{color:'#2d95e3'}}}>
                <Typography mb={2} mt={2} ml={2}>LifeStyle</Typography>
                </Box>
                <Divider />
                <Box sx={{cursor:'pointer', '&:hover':{color:'#2d95e3'}}}>
                <Typography mb={2} mt={2} ml={2}>Advertise</Typography>
                </Box>
                <Divider />
            </Box>
        </Drawer>
    )
}

export default Sidebar