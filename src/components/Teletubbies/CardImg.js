import { CardMedia } from '@mui/material';

export const CardImg = (props) => {
  return (
    <CardMedia
        component="img"
        alt={props.teletubby.name}
        image={props.teletubby.image_url}
        title={props.teletubby.name}
        sx={{minWidth: "100px", width: "100px", height: "100px"}}
      />
  )
} 