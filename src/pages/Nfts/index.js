import React from 'react'
import { CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { Container, Grid, TextField } from '@mui/material';
import Header from 'components/Header';

const Nfts = () => {
    return (
        <div>
            <Header/>
            <Typography gutterBottom variant="h3" component="div" sx={{paddingTop:5}}>
                NFT Page
            </Typography>
            <TextField
                placeholder="Search nft name"
                variant="outlined"
                sx={{padding:4}}
            />
            <Container maxWidth="lg">
                <div id='nftListing'>
                    <Grid container spacing={3}>
                            <Grid className="grid" item  lg={3} md={4} sm={6} xs={12}>
                                <CardActionArea sx={{backgroundColor:'black'}}>
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                       
                                    />
                                    <CardContent sx={{display:'flex',justifyContent:"space-between",color:"white"}}>
                                        <Typography gutterBottom variant="p" component="h3">
                                            {}
                                        </Typography>
                                        <Typography variant="p" component="h3">
                                            {}$
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Nfts
