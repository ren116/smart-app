import {  Typography, Grid, Fab } from "@mui/material";

const Building = ({ num, name, alerts, saving, uptime, power  }) => {
    
    return (
        <Grid container mt={2} py={2}  sx={{boxShadow: 1,border: 2,borderColor: 'primary.light', '&:hover' :{ border: 2, borderColor: '#6600ff', boxShadow: 3 },  borderRadius: 3, backgroundColor: 'white', display : "flex", alignItems : 'center'}}>
            <Grid item xs={1} >
                <Typography>{num}</Typography>
            </Grid>
            <Grid item xs={2} >
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
            <Grid item xs={3} sx={{display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'space-evenly'}}}>
                {
                    alerts.high.count === 0 || alerts.high === 0?
                            <Fab sx={{backgroundColor: '#e6e6e6'}} size="small" aria-label="high">
                                <Typography>{ alerts.high.count >= 0 ? alerts.high.count : alerts.high }</Typography>
                            </Fab> :
                            <Fab color="primary" size="small" aria-label="high">
                                <Typography>{ alerts.high.count >= 0 ? alerts.high.count : alerts.high }</Typography>
                            </Fab>
                }
                {
                    alerts.med.count === 0 ?
                        <Fab sx={{backgroundColor: '#e6e6e6'}} size="small" aria-label="low">
                            <Typography>{ alerts.med.count }</Typography>
                        </Fab> :
                        <Fab sx={{backgroundColor: '#f69e3d'}} size="small" aria-label="low">
                            <Typography>{ alerts.med.count }</Typography>
                        </Fab>
                }
                {
                    alerts.low.count === 0 ?
                        <Fab sx={{backgroundColor: '#e6e6e6'}} size="small" aria-label="low">
                            <Typography>{ alerts.low.count }</Typography>
                        </Fab> :
                        <Fab sx={{backgroundColor: '#ff4850'}} size="small" aria-label="low">
                            <Typography>{ alerts.low.count }</Typography>
                        </Fab>
                }
            </Grid>
            <Grid item xs={2}>
                <Typography sx={{color: '#b5b0b0'}}>{ saving }</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography sx={{color: '#b5b0b0'}}>{ uptime }</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography sx={{color: '#00e600', fontSize:14}}>{ power }</Typography>
            </Grid>
        </Grid>
    )
}

export default Building;