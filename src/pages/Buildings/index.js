import React, { useState, useEffect, useMemo } from "react";
import { Container } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Grid, TextField, Typography, Box } from "@mui/material";
import Building from "../../components/Buildings/Building";
import buildingsData from "./buildings.json";
import {
  keyboardArrowDownFontSizeStyle,
  keyboardArrowDownStyle,
  gridItemElementStyle,
} from "./style";

var PAGE_SIZE = 20;

const BuildingList = () => {
  const [buildings, setBuildings] = useState(buildingsData.buildings);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    PAGE_SIZE += 3;
  }, [buildings]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      searchQuery.length > 0
    ) {
      return;
    }
    setBuildings((prevBuildings) => prevBuildings.concat([]));
  };

  const filterBuildingsByName = (building) => {
    return building.Name.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const filteredBuildings = useMemo(
    () => buildings.filter(filterBuildingsByName),
    [searchQuery]
  );

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Container maxWidth="lg" sx={{ marginTop: "64px" }}>
        <Typography variant="h2" mb={1}>
          Buildings Page
        </Typography>
        <Grid container item xs={12} sm={12} md={12}>
          <Grid item sm />
          <Grid item md={8} xs={12}>
            <TextField
              label="Search Buildings"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </Grid>
          <Grid item sm />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} my={3} sx={{ mt: 5 }}>
          <Grid item sm xs />
          <Grid
            container
            item
            justifyContent="space-around"
            spacing={1}
            sx={gridItemElementStyle}
          >
            <Box
              xs={12}
              sm={2}
              md={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={keyboardArrowDownFontSizeStyle}>Site</Typography>
              <KeyboardArrowDown sx={keyboardArrowDownStyle} />
            </Box>
            <Box xs={12} sm={4} md={4} sx={gridItemElementStyle}>
              <Typography sx={keyboardArrowDownFontSizeStyle}>
                Alerts
              </Typography>
              <KeyboardArrowDown sx={keyboardArrowDownStyle} />
            </Box>
            <Box xs={12} sm={2} md={2} sx={gridItemElementStyle}>
              <Typography sx={keyboardArrowDownFontSizeStyle}>
                Savings
              </Typography>
              <KeyboardArrowDown sx={keyboardArrowDownStyle} />
            </Box>
            <Box xs={12} sm={2} md={2} sx={gridItemElementStyle}>
              <Typography sx={keyboardArrowDownFontSizeStyle}>
                Uptime
              </Typography>
              <KeyboardArrowDown sx={keyboardArrowDownStyle} />
            </Box>
            <Box xs={12} sm={2} md={2} sx={gridItemElementStyle}>
              <Typography sx={keyboardArrowDownFontSizeStyle}>Power</Typography>
              <KeyboardArrowDown sx={keyboardArrowDownStyle} />
            </Box>
          </Grid>
          <Grid item sm xs />
        </Grid>
      </Container>
      {filteredBuildings
        .slice(0, PAGE_SIZE)
        .map(
          (building, index) =>
            !!building && <Building building={building} key={index} />
        )}
    </Grid>
  );
};

export default BuildingList;
