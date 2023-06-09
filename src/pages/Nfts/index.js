import React, { useState, useEffect, useCallback } from "react";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Container, Grid, TextField } from "@mui/material";
import Header from "components/Header";
const Nfts = () => {
  const [filterednftList, setFilteredNftList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    loadNftList();
  }, []);
  useEffect(() => {
    setFilteredNftList(
      filterednftList.filter((nftList) =>
        nftList.collectionName.toLowerCase().includes(searchTerm)
      )
    );
  }, [filterednftList, searchTerm]);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        loadNftList();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);
  const loadNftList = useCallback(async () => {
    const response = await fetch(
      `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
    );
    const data = await response.json();
    setFilteredNftList([...filterednftList, ...data.results]);
    setOffset(offset + 20);
  }, [offset]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
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
        <div id="nftList">
          <Grid container spacing={3}>
            {filterednftList.map((nftList) => (
              <Grid
                key={nftList.id}
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
                    image={nftList.img}
                    alt={nftList.name}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "white",
                    }}>
                    <Typography gutterBottom variant="p" component="h3">
                      {nftList.collectionName}
                    </Typography>
                    <Typography variant="p" component="h3">
                      {nftList.price}$
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
