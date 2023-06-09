import { List, ListItem, ListItemText } from '@mui/material';
import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const Building = (props) => {
  return (
    <Container maxWidth="xl" border shadow>
      <Box sx={{ boxShadow: '3px 0px 3px 0px rgba(0,0,0,0.2)' }}>
        <Grid container justifyContent="space-around" spacing={2}>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6">{props.building.Name}</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <List sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, justifyContent: 'center', gap: 2 }}>
              <ListItem sx={{ p: 1, border: 'md', borderRadius: 'full', mx: 0, bgcolor: props.building.Alerts.high.count ? 'lime.500' : 'gray.300', color: props.building.Alerts.high.count ? 'white' : 'text.primary' }}>
                <ListItemText primary={props.building.Alerts.high.count ? props.building.Alerts.high.count : 0} sx={{ textAlign: 'center' }} />
              </ListItem>
              <ListItem sx={{ p: 1, border: 'md', borderRadius: 'full', mx: 0, bgcolor: props.building.Alerts.med.count ? 'orange.500' : 'gray.300', color: props.building.Alerts.med.count ? 'white' : 'text.primary' }}>
                <ListItemText primary={props.building.Alerts.med.count ? props.building.Alerts.med.count : 0} sx={{ textAlign: 'center' }} />
              </ListItem>
              <ListItem sx={{ p: 1, border: 'md', borderRadius: 'full', mx: 0, bgcolor: props.building.Alerts.low.count ? 'red.600' : 'gray.300', color: props.building.Alerts.low.count ? 'white' : 'text.primary' }}>
                <ListItemText primary={props.building.Alerts.low.count ? props.building.Alerts.low.count : 0} sx={{ textAlign: 'center' }} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography sx={{ p: 1, borderRadius: 'xl', bgcolor: Number(props.building.Savings.slice(0, props.building.Savings.length - 1)) < 100 ? 'red.200' : 'background.paper', color: Number(props.building.Savings.slice(0, props.building.Savings.length - 1)) < 100 ? 'red.600' : 'text.primary' }}>{props.building.Savings}</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Typography sx={{ p: 1, borderRadius: 'xl', bgcolor: Number(props.building.Uptime.slice(0, props.building.Uptime.length - 1)) < 100 ? 'red.200' : 'background.paper', color: Number(props.building.Uptime.slice(0, props.building.Uptime.length - 1)) < 100 ? 'red.600' : 'text.primary' }}>{props.building.Uptime}</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Typography sx={{ p: 1, color: 'green.500' }}>{props.building.Power}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
}

export default Building;
