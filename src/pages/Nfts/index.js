import React, { useState, useEffect, useMemo } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ImgComponent from "./ImgComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import { getNTFsData } from "api";
import { Nftplus } from "utils/constants";

const Nfts = () => {
  const [data, setData] = useState([]);
  const [pageLength, setPageLength] = useState(Nftplus);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  useEffect(() => {
    const fetchData = async () => {
      const temp = await getNTFsData();
      setData(temp.data.results);
    };
    fetchData();
  }, []);
  const paginate = () => {
    setPageLength((pageLength) => pageLength + Nftplus);
  };
  const buildings = useMemo(() => {
    return data.slice(0, pageLength);
  }, [data, pageLength]);
  return (
    <Box sx={{ m: 12, flexGrow: 1 }}>
      <Grid mb={8}>
        <Typography variant="h2" gutterBottom>
          NTFS PAGE
        </Typography>
      </Grid>
      <InfiniteScroll
        dataLength={buildings.length}
        next={paginate}
        hasMore={true}
        loader={<h4>loading... </h4>}
      >
      <Grid
        container
        ml={0}
        mr={0}
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 2, sm: 8, md: 12, xl: 20 }}
        mt={3}
      >
        {buildings.map((item, key) => (
          <Grid xs={2} sm={4} md={4} xl={4} key={key}>
            <Item>
              <ImgComponent
                img_url={item.img}
                img_name={item.onChainCollection.data.name}
                img_price={item.price}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
      </InfiniteScroll>
    </Box>
  );
};
export default Nfts;
