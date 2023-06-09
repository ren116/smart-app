import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import InfiniteScroll from "react-infinite-scroll-component";

import Spinner from "components/Spinner";
import { GetData } from "../../api/buildings";
import BuildingField from "components/Buildings/BuildingField";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 20
  }));

const Buildings = () => {
    const [buildings, setBuildings] = useState([]);
    const [saveBuildings, setSaveBuildings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [keyword, setKeyword] = useState('');
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const getAllData = async () => {
            const { data } = await GetData();
            setAllData(data.buildings);
        }
        getAllData();
    }, [])
    
    useEffect(() => {
        getBuildingsData(0,20);
    }, [allData]);

    const getBuildingsData = (st, en) => {
        setIsLoading(true);
        setBuildings(saveBuildings => [...saveBuildings, ...allData.slice(st, en)]);
        setSaveBuildings(saveBuildings => [...saveBuildings, ...allData.slice(st, en)]);
        search(keyword);
        setIsLoading(false);
    };
      
    const handleNext= () => {
        getBuildingsData(saveBuildings.length, saveBuildings.length + 20);
        if(keyword) {
            search(keyword);
        }
    }

    useEffect(() => {
        search(keyword);
    }, [keyword]);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    useEffect(() => {
        if(buildings.length < 20) {
            getBuildingsData(0, 40);
        }
    }, [buildings.length])
    
    const search = (keyword) => {
        if(keyword) {
            let tmp = [];
            saveBuildings.forEach(building => {
                if((building.Name.toLowerCase()).includes(keyword.toLowerCase())) tmp.push(building);
            });
            setBuildings(tmp);
        }
        if(keyword === "") {
            setBuildings(saveBuildings);
            return;
        }
    }

    return (
        <Container maxWidth="xl">
            {
                isLoading ?
                    <Spinner/> :
                    <InfiniteScroll
                        dataLength={saveBuildings.length}
                        next={handleNext}
                        hasMore={true}
                    >
                        <Container maxWidth="lg" sx={{ minWidth: 350}}>
                            <Grid container pt={3} textAlign="right">
                                <Grid>
                                    <TextField id="outlined-basic" label="Search..."  variant="outlined" size="small" onChange={(e) =>handleChange(e)} value={keyword}/>
                                </Grid>
                            </Grid>
                            <Grid container mt={2}>
                                <Grid item xs={1}>
                                    <Item>
                                        No
                                    </Item>
                                </Grid>
                                <Grid item xs={2}>
                                    <Item>
                                    Site
                                    </Item>
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
                            {
                                buildings?
                                buildings.map((building, key) => {
                                    return (
                                        <BuildingField 
                                            key = { key }
                                            num = { key + 1 }
                                            name = { building.Name }
                                            alerts = { building.Alerts }
                                            saving = { building.Savings }
                                            uptime = { building.Uptime }
                                            power = { building.Power}
                                        />
                                    );
                                })
                                :<>No data</>
                            }
                        </Container>
                    </InfiniteScroll>            
                }
        </Container>
    )
}

export default Buildings;