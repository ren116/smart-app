import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Container, Grid, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";

const Building = (props) => {
  const { Name, Uptime, Power, Savings, Alerts } = props.building;

  return (
    <Container maxWidth="lg" key={props.index}>
      <Box sx={{ boxShadow: "10px 1px 10px 5px rgba(0,0,1,0.1)" }}>
        <Grid
          container
          justifyContent="space-around"
          alignItems={"center"}
          spacing={1}
        >
          <Grid item xs={12} sm={2} md={2}>
            <Typography variant="h6">{Name}</Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <List
              sx={{
                display: "flex",
                flexDirection: { xs: "row" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItem
                sx={{
                  p: 0,
                  mb: 1,
                  width: { xs: "10%", sm: "30%", md: "20%" },
                  border: "md",
                  borderRadius: "50%",
                  mx: 1,
                  bgcolor: Alerts.high.count ? "lime" : "#e0e0e0",
                  color: Alerts.high.count ? "white" : "primary",
                }}
              >
                <ListItemText
                  primary={Alerts.high.count ? Alerts.high.count : "0"}
                  sx={{ textAlign: "center" }}
                />
              </ListItem>
              <ListItem
                sx={{
                  p: 0,
                  mb: 1,
                  width: { xs: "10%", sm: "30%", md: "20%" },
                  border: "md",
                  borderRadius: "50%",
                  mx: 1,
                  bgcolor: Alerts.med.count ? "orange" : "#e0e0e0",
                  color: Alerts.med.count ? "white" : "primary",
                }}
              >
                <ListItemText
                  primary={Alerts.med.count ? Alerts.med.count : "0"}
                  sx={{ textAlign: "center" }}
                />
              </ListItem>
              <ListItem
                sx={{
                  p: 0,
                  mb: 1,
                  width: { xs: "10%", sm: "30%", md: "20%" },
                  border: "md",
                  borderRadius: "50%",
                  mx: 1,
                  bgcolor: Alerts.low.count ? "red" : "#e0e0e0",
                  color: Alerts.low.count ? "white" : "primary",
                }}
              >
                <ListItemText
                  primary={Alerts.low.count ? Alerts.low.count.toString() : "0"}
                  sx={{ textAlign: "center" }}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mb: 1, display: "flex", justifyContent: "center" }}
            sm={2}
            md={2}
          >
            <Typography
              sx={{
                p: 0,
                width: "40%",
                borderRadius: "10px",
                bgcolor:
                  Number(Savings.slice(0, Savings.length - 1)) < 100
                    ? "#ffebee"
                    : "white",
                color:
                  Number(Savings.slice(0, Savings.length - 1)) < 100
                    ? "red"
                    : "black",
              }}
            >
              {Savings}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mb: 1, display: "flex", justifyContent: "center" }}
            sm={2}
            md={2}
          >
            <Typography
              sx={{
                p: 0,
                width: "40%",
                borderRadius: "10px",
                bgcolor:
                  Number(Uptime.slice(0, Uptime.length - 1)) < 100
                    ? "#ffebee"
                    : "white",
                color:
                  Number(Uptime.slice(0, Uptime.length - 1)) < 100
                    ? "red"
                    : "black",
              }}
            >
              {Uptime}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }} sm={2} md={2}>
            <Typography sx={{ p: 0, color: "green" }}>{Power}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Building;
