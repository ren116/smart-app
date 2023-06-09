import React, { useState, useEffect } from "react";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Container, Grid, TextField } from "@mui/material";
import Header from "components/Header";

const Nfts = () => {
  const [nftListing, setNftListing] = useState([]);
  const [filteredNftListing, setFilteredNftListing] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const loadNftListing = async () => {
    const response = await fetch(
      `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
    );
    const data = await response.json();
    setNftListing([...nftListing, ...data.results]);
    setFilteredNftListing([...nftListing, ...data.results]);
    setOffset(offset + 20);
    console.log(response);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  useEffect(() => {
    loadNftListing();
  }, []);
  useEffect(() => {
    setFilteredNftListing(
      nftListing.filter((nftListing) =>
        nftListing.collectionName.toLowerCase().includes(searchTerm)
      )
    );
  }, [nftListing, searchTerm]);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        loadNftListing();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);
  return (
    <div>
      <Header />
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ paddingTop: 5 }}
      >
        NFT Page
      </Typography>
      <TextField
        placeholder="Search nft name"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ padding: 4 }}
      />
      <Container maxWidth="lg">
        <div id="nftListing">
          <Grid container spacing={3}>
            {filteredNftListing.map((nftListing) => (
              <Grid
                key={nftListing.id}
                className="grid"
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}>
                <CardActionArea sx={{ backgroundColor: "black" }}>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={nftListing.img}
                    alt={nftListing.name}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "white",
                    }}>
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
        </div>
      </Container>
    </div>
  );
};

export default Nfts;
