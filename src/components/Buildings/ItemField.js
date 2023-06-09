import { Grid, Typography } from "@mui/material";

const ItemField = ({ color, value}) => {
    return (
        <Grid item xs={2}>
            <Typography sx={ {color: color}}>{ value }</Typography>
        </Grid>
    )
}

export default ItemField;