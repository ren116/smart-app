import {  Typography, Grid, Fab } from "@mui/material";

const Building = ({ num, name, alerts, saving, uptime, power  }) => {
    return (
        <Grid container mt={2}  sx={{boxShadow: 1,border: 1,borderColor: 'primary.light',  borderRadius: 3, backgroundColor: 'white',}}>
            <Grid item xs={1} pt={2.5}>
                <Typography>{num}</Typography>
            </Grid>
            <Grid item xs={2} pt={2.5}>
                <Typography
                    sx={{
                        fontSize: 18,
                        fontFamily: "monospace",
                        fontWeight: 900,
                        textDecoration: "none",
                    }}
                >
                    { name }
                </Typography>
            </Grid>
            <Grid item xs={3} pt={2} pb={2}>
                <Fab color="primary" size="small" aria-label="high">
                    <Typography>{ alerts.high.count >= 0 ? alerts.high.count : alerts.high }</Typography>
                </Fab>
                <Fab sx={{backgroundColor: '#f69e3d'}} size="small" aria-label="mid">
                    <Typography>{ alerts.med.count }</Typography>
                </Fab>
                <Fab sx={{backgroundColor: '#ff4850'}} size="small" aria-label="low">
                    <Typography>{ alerts.low.count }</Typography>
                </Fab>
            </Grid>
            <Grid item xs={2} pt={2.5}>
                <Typography sx={{color: '#cdc9c9'}}>{ saving }</Typography>
            </Grid>
            <Grid item xs={2} pt={2.5}>
                <Typography sx={{color: '#cdc9c9'}}>{ uptime }</Typography>
            </Grid>
            <Grid item xs={2} pt={2.5}>
                <Typography sx={{color: '#9dcf7a', fontSize:14}}>{ power }</Typography>
            </Grid>
        </Grid>
    )
}

export default Building;