import { Fab, Typography } from '@mui/material';

const FabField = ({ count, bgColor}) => {
        return (
                <Fab sx={{backgroundColor: bgColor}} size="small" aria-label="low">
                        <Typography>{ count }</Typography>
                </Fab>
        )
}

export default FabField;