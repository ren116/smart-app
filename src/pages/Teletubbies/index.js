import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import teletubbiesData from "../../Data/teletubbies.json";

const Tele = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <Typography variant="h4">Teletubbies</Typography>
        {teletubbiesData.map((teletubby, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item>
              <img src={teletubby.image_url} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h5">{teletubby.name}</Typography>
                </Grid>
                <Grid item>
                  <Box sx={{ display: "flex", alignItems: "center" }}></Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
};

export default Tele;
