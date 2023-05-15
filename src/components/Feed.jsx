import { useState, useEffect} from 'react';
import { Stack, Box, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection:  { sx: 'column', md: "row"} }}>
    <Box sx={{ height: { sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2} }}>
       <SideBar />
       <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: "#fff"}}>
         copyright 2023 JSM media
       </Typography>
    </Box>
      
      <Box p="2" sx={{ overflowY: "auto", height: "90vh", flex: 2  }}>
        <Typography variant="h4" fontWeight="bold" mb="2" sx={{ color: "white"}}>
          New <span style={{ color:"#f31503" }}>Videos</span>
        </Typography>
        </Box>

        <Videos />
    </Stack>
  ) 
}

export default Feed
