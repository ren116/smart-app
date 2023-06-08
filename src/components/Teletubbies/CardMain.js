import { CardContent, Typography, Chip } from '@mui/material';

export const CardMain = (props) => {
  return (
    <CardContent sx={{height: "140px", padding: "0px", paddingBottom: "0px !important"}}>
      <Typography gutterBottom variant="h5" component="div">
        {props.teletubby.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.teletubby.description}
      </Typography>
    </CardContent>
  )
} 