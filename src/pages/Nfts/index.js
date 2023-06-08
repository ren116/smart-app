import React, { useEffect, useState } from "react";
import Search from "components/Search";
import { Container, Typography, Box } from "@mui/material";

const Nfts = () => {

    return (
        <Container maxWidth="xl">
            <Box sx={{ display: 'flex', justifyContent: "center", marginTop: '90px' }}>
                <Search />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: "center", marginTop: '90px' }}>
            </Box>
        </Container>
    )
};

export default Nfts;