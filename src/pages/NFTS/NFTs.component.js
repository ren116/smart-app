import React, { useState, useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

const Nfts_PAGE = () => {
  const [list, setListing] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const loadList = useCallback(async () => {
    const response = await fetch(
      `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
    );
    const data = await response.json();
    setListing([...list, ...data.results]);
    setFilteredList([...list, ...data.results]);
    setOffset(offset + 20);
  }, [offset, list]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    loadList();
  }, [loadList]);

  useEffect(() => {
    setFilteredList(
      list.filter((list) =>
        list.collectionName.toLowerCase().includes(searchTerm)
      )
    );
  }, [list, searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000
      ) {
        loadList();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadList]);

  return (
    <Container maxWidth="xl" sx={{ justifyContent: "center", margin: "auto" }}>
      <Typography variant="h2" sx={{ m: "60px", justifyContent: "center" }}>
        NFT Marketplace
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ m: "10px" }}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ m: "auto" }}
      >
        {filteredList.map((list) => (
          <Grid item className="card" key={list.id} xs={3}>
            <img
              style={{ width: "100%", height: "70%" }}
              src={list.img}
              alt={""}
              variant="img"
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              style={{ backgroundColor: "orange" }}
            >
              <Typography variant="h5">{list.collectionName}</Typography>
              <Typography variant="p">{list.price}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Nfts_PAGE;
