import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import InfiniteScroll from "react-infinite-scroll-component";

import Building from "components/Buildings/Building";
import Spinner from "components/Spinner";
import { GetData } from "../../api/buildings";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
    }, [allData])

    const getBuildingsData = (st, en) => {
        setIsLoading(true);
        setBuildings(allData.slice(st, en));
        setSaveBuildings(allData.slice(st, en));
        setIsLoading(false);
    };
      
    const handleNext= () => {
        getBuildingsData(0, saveBuildings.length + 20);
        if(keyword) {
            search(keyword);
        }
    }

    useEffect(() => {
        search(keyword);
    }, [keyword, saveBuildings]);

    useEffect(() => {
        if(buildings.length < 9) {
            getBuildingsData(0, 40);
        }
    }, [buildings.length])
    
    const search = (keyword) => {
        if(keyword) {
            let tmp = [];
            saveBuildings.forEach(building => {
                if((building.Name).includes(keyword)) tmp.push(building);
            });
            setBuildings(tmp);
        }
        else {
            setBuildings(saveBuildings);
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
                                    <Grid item xs={10}></Grid>
                                    <Grid item xs={2}>
                                        <TextField id="outlined-basic" label="Search..." variant="outlined" size="small" onChange={(e)=>setKeyword(e.target.value)} value={keyword}/>
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
                                    buildings.map((building, key) => {
                                        return (
                                            <Building 
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
                                }
                            </Container>
                        </InfiniteScroll>            
                    }
        </Container>
    )
}

export default Buildings;