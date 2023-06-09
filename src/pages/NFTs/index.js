import React, { useEffect, useState, useRef } from "react";
import { TextField, Grid, Container} from "@mui/material";
import { getNFTList } from "api";
import NftListingCard from "components/NftListingCard";
import Spinner from "components/Spinner";

const NFTSListPage = () => {
  const [nftListing, setNftListing] = useState([]);
  const [filteredNftListing, setFilteredNftListing] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  let loading = useRef(false);

  const loadNftListing = async () => {
    try {
      if (!loading.current) {
        loading.current = true;
        const responseData = await getNFTList(offset);
        setNftListing([...nftListing, ...responseData.results]);
        setFilteredNftListing([...nftListing, ...responseData.results]);
        setOffset(offset + 20);
        loading.current = false;
      }
    } catch (err) {
      console.log(err);
      loading.current = false;
    }
  };

  useEffect(() => {
    loadNftListing();
    // eslint-disable-next-line
  }, []);

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
    // eslint-disable-next-line
  }, [offset]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    setFilteredNftListing(
      nftListing.filter((nftListing) =>
        nftListing.collectionName.toLowerCase().includes(searchTerm)
      )
    );
  }, [nftListing, searchTerm]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 10,
        mb: 10,
      }}
    >
      <h1>N F T s</h1>
      <TextField
        fullWidth
        label={"Search NFTs"}
        margin="dense"
        mx={10}
        mt={10}
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ width: "80%", mx: "auto" }}
      />

      <Grid
        container
        display="flex"
        justifyContent="center"
        mb={20}
        spacing={2}
        columns={{ xs: 2, sm: 8, md: 12, lg: 16, xl: 20 }}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 5,
        }}
      >
        {loading.current ? (
          <Spinner />
        ) : filteredNftListing.length ? (
          filteredNftListing.map((nftListing, index) => (
            <NftListingCard nftListing={nftListing} key={index} />
          ))
        ) : (
          <h3>There's no items to show</h3>
        )}
      </Grid>
    </Container>
  );
};
export default NFTSListPage;
