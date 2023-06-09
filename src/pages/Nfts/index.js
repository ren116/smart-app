import React,{ useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Nfts = () => {
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
    );
    const data = await response.json();
    setNfts([...nfts, ...data.results]);
    setFilteredNfts([...nfts, ...data.results]);
    setOffset(offset + 20); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredNfts(
      nfts.filter((nfts) =>
        nfts.collectionTitle.toLowerCase().includes(searchQuery)
      )
    );
  }, [nfts, searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        fetchData();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <Container>
      <TextField
        label="Search NFTs"
        value={searchQuery}
       sx={{my:'50px'}}
        
        onChange={handleSearch}
      />
      <Grid
       sx={{m:'100px'}}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8,md: 12, lg: 16, xl: 20 }}
      >
        {filteredNfts.map((nfts, id) => (
          <Grid item key={id} xs={2} sm={4} md={4} lg={4} xl={5}>
            <Box sx={{ bgcolor: 'primary.main', py :'10' }}>
              <div  width="100%" height="100%"><img src={nfts.img} width="100%" height="80%" alt="" />
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <h4>{nfts.collectionTitle}</h4>
                <p>{nfts.price}</p>
              </Box>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Nfts;           