import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import Building from "components/Buildings/Building";
import Spinner from "components/Spinner";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Buildings = () => {

    const[buildings, setBuildings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getData = () => {
        fetch("buildings.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            setBuildings(myJson.buildings);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    
    return (
        <Container maxWidth="xl">
            {
                isLoading ?
                        <Spinner/> :
                    <Container maxWidth="lg" sx={{ minWidth: 375}}>
                        <Grid container pt={1} textAlign="right">
                            <Grid item xs={10}></Grid>
                            <Grid item xs={2}>
                                <TextField id="outlined-basic" label="Search..." variant="outlined" size="small" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2}>
                                <Item>
                                Site
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
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
                        {
                            buildings.map((building, key) => {
                                return (
                                    <Building key={key}
                                        name = { building.Name }
                                        alerts = { building.Alerts }
                                        saving = { building.Savings }
                                        uptime = { building.Uptime }
                                        power = { building.Power}
                                    />
                                );
                            })
                        }
                    </Container>
            }
        </Container>
    )
}

export default Buildings;