import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import  { getCurrenTeletubbyData } from "api"

const Teletubbies = () => {
  const [teletubbies, setTeletubbies] = useState([]);
  const getTeletubbies = async () => {
    try {
      const response = await getCurrenTeletubbyData();
      setTeletubbies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeletubbies();
  }, []);

  return (
    <>
      <Container>
        <Grid>
          <Typography
            variant="h2"
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              color: "Blue",
            }}
            mt={4}
            mb={3}
          >
            Teletubbies
          </Typography>
        </Grid>
        {teletubbies.map((teletubby, index) => (
          <Grid key={index}>
            <>
              <Grid
                container
                sx={{
                  border: "2px solid",
                  borderColor: "success.main",
                  position: "relative",
                }}
                p={2}
                my={2}
                direction={`${index % 2 ? "row-reverse" : ""}`}
              >
                <Grid item xs={12} md={3} lg={3}>
                  <div className="img-container">
                    <img
                      src={teletubby.image_url}
                      alt={teletubby.image_url}
                      style={{
                        width: "180px",
                        height: "180px",
                        padding: "auto",
                      }}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={9} lg={9}>
                  <Grid component="div">
                    <Typography
                      variant="h4"
                      component="div"
                      align="left"
                      sx={{ px: 2 }}
                    >
                      {teletubby.name}
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ px: 2 }}>
                      {teletubby.description}
                    </Typography>
                    <Grid container spacing={2} justifyContent="flex-start">
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[0]}
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[1]}
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[2]}
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          {teletubby.traits[3]}
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          </Grid>
        ))}
      </Container>
    </>
  );
};

export default Teletubbies;
