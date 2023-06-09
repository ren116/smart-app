import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { getNftItemsData } from "api/Nfts";
import InfiniteScroll from "react-infinite-scroll-component";

const Nfts = () => {
  const [nfts, setNfts] = useState([]);
  const [allData, setAllData] = useState([]);
  const [saveNfts, setSaveNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getAllData = async () => {
      const { data } = await getNftItemsData();
      setAllData(data.results);
    };
    getAllData();
  }, []);

  useEffect(() => {
    getNftsData(0, 20);
  }, [allData]);

  const getNftsData = (st, en) => {
    setNfts((saveNfts) => [...saveNfts, ...allData.slice(st, en)]);
    setSaveNfts((saveNfts) => [...saveNfts, ...allData.slice(st, en)]);
  };

  const handleNext = () => {
    getNftsData(saveNfts.length, saveNfts.length + 20);
  };

  useEffect(() => {
    setFilteredNfts(
      nfts.filter((nfts) =>
        nfts.collectionTitle.toLowerCase().includes(searchQuery)
      )
    );
  }, [nfts, searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={saveNfts.length}
        next={handleNext}
        hasMore={true}
      >
        <TextField
          label="Search NFTs"
          value={searchQuery}
          sx={{ my: "50px" }}
          onChange={handleSearch}
        />
        <Grid
          sx={{ m: "100px" }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 16, xl: 20 }}
        >
          {filteredNfts.map((nft, id) => (
            <Grid item key={id} xs={2} sm={4} md={4} lg={4} xl={5}>
              <Box
                sx={{
                  py: "10",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: 'url("./blank.jpg")',
                    backgroundSize: "cover",
                  }}
                >
                  <img src={nft.img} width="100%" height="80%" alt="" />
                  <Box
                    sx={{
                      bgcolor: "primary.main",
                      display: "flex",
                      justifyContent: "space-around",
                      height: "20%",
                    }}
                  >
                    <h4>{nft.collectionTitle}</h4>
                    <p>{nft.price}</p>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

export default Nfts;
