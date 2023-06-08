import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Building from '../../components/Buildings/Building'
import buildingsData from './buildings.json'
import {
  Grid,
  TextField,
  Typography,
} from '@mui/material';

let PAGE_SIZE = 20;

const BuildingList = () => {
  const [buildings, setBuildings] = useState(buildingsData.buildings);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      searchQuery.length > 0
    ) {
      return;
    }
    setBuildings(prevBuildings => prevBuildings.concat([]));
  };

  useEffect(() => {
    PAGE_SIZE += 3;
  }, [buildings]);

  const filterBuildingsByName = building => {
    return building.Name.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const filteredBuildings = buildings.filter(filterBuildingsByName);

  return (
      <Grid container className='flex justify-center items-center'>
        <Container maxWidth="xl" className='mt-10'>
            <Grid container item xs={12} sm={12} md={12}>
                <Grid item sm></Grid>
                <Grid item md={8} xs={12}>
                    <TextField
                    label="Search Buildings"
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                    />
                </Grid>
                <Grid item sm></Grid>
            </Grid>
            <div className='mt-5'>
              <Grid container item xs={12} sm={12} md={12}>
                  <Grid item sm></Grid>
                  <Grid item md={8} xs={12} className='flex justify-center'>
                    <Grid item sm={2}>
                        <Typography className='p-0' variant="h6">Site</Typography>
                    </Grid>
                    <Grid item sm={4}>
                      <Typography className='p-0' variant="h6">Alerts</Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography className='p-0' variant="h6">Savings</Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography className='p-0' variant="h6">Uptime</Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography className='p-0' variant="h6">Power</Typography>
                    </Grid>
                  </Grid>
                  <Grid item sm></Grid>
              </Grid>
            </div>
        </Container>
      {filteredBuildings.slice(0, PAGE_SIZE).map((building) => (
        building && <Building building = {building}/>
      ))}
    </Grid>
  );
};

export default BuildingList;
