import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../layouts/MainLayout'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationTabs from './NavigationTabs';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../Redux/reducers/sidebarReducer';

const Navbar = () => {
    const selector = useSelector(state => state.sidebar)
    const { open } = selector;
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(toggle(false))
    }

    const handleOpen = () => {
        dispatch(toggle(true))
    }
    return (
        <Box component={'header'} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box py={0.5} sx={{ backgroundColor: 'black', boxSizing: 'border-box' }}>
                <MainLayout>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', columnGap: '1.3rem', alignItems: 'center' }}>
                            <Typography variant='subtitle2' sx={{ color: 'white' }}>About</Typography>
                            <Typography variant='subtitle2' sx={{ color: 'white' }}>Advertise</Typography>
                            <Typography variant='subtitle2' sx={{ color: 'white' }}>Contact</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton>
                                <InstagramIcon sx={{ color: 'white', fontSize: '17px' }} />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon sx={{ color: 'white', fontSize: '17px' }} />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon sx={{ color: 'white', fontSize: '17px' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </MainLayout>
            </Box>
            <Box sx={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <MainLayout>
                    <Box pt={1} sx={{ display: 'flex', justifyContent: 'space-between', }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton>
                                <MenuIcon onClick={handleOpen} />
                            </IconButton>
                            <Typography ml={1} variant='h5' fontWeight={600}>DEUS</Typography>
                            <NavigationTabs />
                        </Box>

                        <Box>
                            <IconButton>
                                <SearchIcon sx={{ color: 'black' }} />
                            </IconButton>ِ
                        </Box>
                    </Box>
                </MainLayout>
            </Box>
            <Sidebar open={open} handleClose={handleClose}/>
        </Box>
    )
}

export default Navbar