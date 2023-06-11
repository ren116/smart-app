import { CardMedia } from '@mui/material';

export const CardImg = (props) => (
    <CardMedia
      component="img"
      alt={props.cardInfo.name}
      image={props.cardInfo.image_url}
      title={props.cardInfo.name}
      sx={{ minWidth: "100px", width: {sm: "100px", xs: "50%"}, height: 
        {sm: "100px", xs: "auto"}, m: {xs: "auto", sm: 0} }}
    />
  )
