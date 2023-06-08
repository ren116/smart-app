import React, { useState, useEffect } from 'react'
import { Box, CardMedia, CardContent, Typography, CardActionArea, Card } from '@mui/material';
import { Container, Grid, TextField } from '@mui/material';

export default function NFTs() {
    return (
        <Box sx={{ backgroundColor: "lightgrey" }}>
            <Typography gutterBottom variant="h3" component="div" sx={{ paddingTop: 5 }}>
                NFT Marketplace
            </Typography>
            <TextField
                placeholder="Search nft name"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearch}
                sx={{ width: "20%", backgroundColor: "white" }}
            />

            <Container maxWidth="lg" sx={{ marginTop: 3 }}>
                <Grid container spacing={5}>
                    {filteredNftListing.map(nftListing => (
                        <Grid key={nftListing.id} className="grid" item lg={3} md={4} sm={6} xs={12} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={nftListing.img}
                                    alt={nftListing.name}
                                />
                                <CardContent sx={{ display: 'flex', justifyContent: "space-between", backgroundColor: "lightgreen" }}>
                                    <Typography gutterBottom variant="p" component="h3">
                                        {nftListing.collectionName}
                                    </Typography>
                                    <Typography variant="p" component="h3">
                                        {nftListing.price}$
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}