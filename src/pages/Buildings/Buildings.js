import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GetData } from "../../api/buildings";
import BuildingItem from "components/Buildings/BuildingItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Buildings = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      const { data } = await GetData();
      setAllData(data.buildings);
    };
    getAllData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ minWidth: 350 }}>
      <Grid container pt={3} textAlign="right">
        <Grid item xs={10}></Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            size="small"
          />
        </Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item xs={1}>
          <Item>No</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Site</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Alerts</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Savings</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Uptime</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Power</Item>
        </Grid>
      </Grid>
      {allData.map((building, key) => {
        return (
          <BuildingItem
            key={key}
            num={key + 1}
            name={building.Name}
            alerts={building.Alerts}
            saving={building.Savings}
            uptime={building.Uptime}
            power={building.Power}
          />
        );
      })}
    </Container>
  );
};

export default Buildings;
