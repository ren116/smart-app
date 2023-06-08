import { List, ListItem, ListItemText } from '@mui/material';
import { Container } from '@mui/material';
import React from 'react';
import {
    Card,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';
let keyValue = 0;
const Building = (props) => {
    return (
        <Container maxWidth="xl" key={keyValue++}>
            <Grid container item xs={12} sm={12} md={12} >
                <Grid item sm md xs></Grid>
                <Grid item md={8} xs={12}>
                    <Card item sm={12} xs={12} className='my-2 shadow-2xl shadow-gray-900'>
                        <CardContent md={12} xs={12} className='flex flex-row items-center'>
                            <Grid item sm={2} xs={2}>
                                <Typography className='p-0 md:text-[20px] sm:text-xs'>{props.building.Name}</Typography>
                            </Grid>
                            <Grid item sm={4} xs={4}>
                                <List className='flex flex-row justify-center gap-2'>
                                    <Grid item sm={2} xs={2}>
                                        <ListItem className={props.building.Alerts.high.count?'p-1 border rounded-full mx-0 bg-lime-500 text-white':'p-1 border rounded-full mx-0 bg-gray-300 text-white'}>
                                            <ListItemText className='text-center' primary={props.building.Alerts.high.count?props.building.Alerts.high.count:0} />
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={2} xs={2} columnSpacing={2}>
                                        <ListItem className={props.building.Alerts.med.count?'p-1 border rounded-full mx-0 bg-orange-500 text-white':'p-1 border rounded-full mx-0 bg-gray-300 text-white'}>
                                            <ListItemText className='text-center' primary={props.building.Alerts.med.count?props.building.Alerts.med.count:0} />
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={2} xs={2}>
                                        <ListItem className={props.building.Alerts.low.count?'p-1 border rounded-full mx-0 bg-red-600 text-white':'p-1 border rounded-full mx-0 bg-gray-300 text-white'}>
                                            <ListItemText className='text-center' primary={props.building.Alerts.low.count?props.building.Alerts.low.count:0} />
                                        </ListItem>
                                    </Grid>
                                </List>
                            </Grid>
                            <Grid item sm={2} xs={2}>
                                <Grid item md={6} xs={12}>
                                    <Typography className={Number(props.building.Savings.slice(0,props.building.Savings.length-1)) < 100?'p-1 border rounded-xl bg-red-200 text-red-600':'p-1'}>{props.building.Savings}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item sm={2} xs={2}>
                                <Grid item md={6} xs={12}>
                                    <Typography className={Number(props.building.Uptime.slice(0,props.building.Uptime.length-1)) < 100?'p-1 border rounded-xl bg-red-200 text-red-600':'p-1'}>{props.building.Uptime}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item sm={2} xs={2}>
                                <Grid item md={6} xs={12}>
                                    <Typography className='p-1 text-green-500'>{props.building.Power}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm md xs></Grid>
            </Grid>
        </Container>
    )
}

export default Building