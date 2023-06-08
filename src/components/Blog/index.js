import React, { useState, useEffect } from 'react'
import { Container, Grid, Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Blog = () => {
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "center", padding: '30px' }}>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'end', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search NFT"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </Paper>
            </Box>
            <Container maxWidth="xl">
                <div id='blogdata'>
                    <Grid container spacing={10}>
                        {filterBlog.map(item => (
                            <Grid item lg={3} md={4} sm={6} xs={12} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={item.img}
                                        alt={item.bear}
                                    />
                                    <CardContent sx={{ display: 'flex', justifyContent: "space-between", backgroundColor: "#80cbc4" }}>
                                        <Typography gutterBottom variant="p">
                                            {item.collectionName}
                                        </Typography>
                                        <Typography variant="p">
                                            {item.price}$
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Blog