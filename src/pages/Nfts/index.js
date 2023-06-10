import React from "react";
import { Box } from "@mui/material";
import Blog from "components/Blog";


const Nfts = () => {
  return (
    <Box sx={{ bgcolor: '#bcaaa4', }}>
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: '60px' }}>
        <Blog />
      </Box>
    </Box>
  )
};

export default Nfts;
