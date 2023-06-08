import React, { useState, useEffect } from 'react'
import { CardMedia, CardContent, Typography, CardActionArea, Card } from '@mui/material';
import { Container, Grid, TextField } from '@mui/material';

export default function NFTs() {
    return (
        <Box>
            <Typography gutterBottom variant="h3" component="div" sx={{ paddingTop: 5 }}>
                NFT Marketplace
            </Typography>
            <TextField
            placeholder="Search nft name"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            sx={{ paddingBottom: 3 }}
        />
        </Box>
    );
}