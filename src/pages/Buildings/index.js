import React, { useState, useEffect, useMemo } from "react";
import Building from "../../components/Buildings/Building";
import { Container } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Grid, TextField, Typography, Box } from "@mui/material";
import buildingsData from "./buildings.json";

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
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container item xs={12} sm={12} md={12} sx={{ mt: 5 }}>
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
            sx={{ display: "flex", flexDirection: "row" }}
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
              <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                Site
              </Typography>
              <KeyboardArrowDown
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              />
            </Box>
            <Box
              xs={12}
              sm={4}
              md={4}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                Alerts
              </Typography>
              <KeyboardArrowDown
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              />
            </Box>
            <Box
              xs={12}
              sm={2}
              md={2}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                Savings
              </Typography>
              <KeyboardArrowDown
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              />
            </Box>
            <Box
              xs={12}
              sm={2}
              md={2}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                Uptime
              </Typography>
              <KeyboardArrowDown
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              />
            </Box>
            <Box
              xs={12}
              sm={2}
              md={2}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                Power
              </Typography>
              <KeyboardArrowDown
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              />
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
