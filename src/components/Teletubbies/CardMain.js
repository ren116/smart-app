import { CardContent, Typography, Chip } from '@mui/material';

export const CardMain = (props) => {
  return (
    <CardContent align="left" sx={{height: "100px", padding: "10px", paddingBottom: "0px !important", fontFamily: "bubble !important"}}>
      <Typography gutterBottom variant="h5" component="div" sx={{color: props.teletubby.color}}>
        {props.teletubby.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.teletubby.description}
      </Typography>
    </CardContent>
  )
} 