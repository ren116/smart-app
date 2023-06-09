import React, { useState, useEffect } from "react";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Container, Grid, TextField } from "@mui/material";

const Nfts = () => {
  const [nftlist, setNftlist] = useState([]);
  const [filterednftlist, setFilteredNftlist] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadNftlist();
  }, []);

  useEffect(() => {
    setFilteredNftlist(
      nftlist.filter((nftlist) =>
        nftlist.collectionName.toLowerCase().includes(searchTerm)
      )
    );
  }, [nftlist, searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        loadNftlist();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  const loadNftlist = async () => {
    const response = await fetch(
      `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
    );
    const data = await response.json();
    setNftlist([...nftlist, ...data.results]);
    setFilteredNftlist([...filterednftlist, ...data.results]);
    setOffset(offset + 20);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ paddingTop: 5, marginTop: "64px" }}
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
        <div id="nftlist">
          <Grid container spacing={3}>
            {filterednftlist.map((nftlist) => (
              <Grid
                key={nftlist.id}
                className="grid"
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
              >
                <CardActionArea sx={{ backgroundColor: "black" }}>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={nftlist.img}
                    alt={nftlist.name}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "white",
                    }}>
                    <Typography gutterBottom variant="p" component="h3">
                      {nftlist.collectionName}
                    </Typography>
                    <Typography variant="p" component="h3">
                      {nftlist.price}$
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
