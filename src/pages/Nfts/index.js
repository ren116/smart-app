import React, { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ImgComponent from "./ImgComponent";
import { getNTFsData } from "api";

const Nfts = () => {
  const [data, setData] = useState(null);

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
      setData(temp.data);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ m: 12, flexGrow: 1 }}>
      <Grid mb={8}>
        <Typography variant="h2" gutterBottom>
          NTFS PAGE
        </Typography>
      </Grid>
      <Grid
        container
        ml={0}
        mr={0}
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 2, sm: 8, md: 12, xl: 20 }}
        mt={3}
      >
        {data &&
          data.results.map((item, key) => (
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
    </Box>
  );
};
export default Nfts;
