import { CardMedia } from '@mui/material';

export const CardImg = (props) => {
  return (
    <CardMedia
      component="img"
      alt={props.teletubby.name}
      image={props.teletubby.image_url}
      title={props.teletubby.name}
      sx={{ minWidth: "100px", width: {sm: "100px", xs: "50%"}, height: 
        {sm: "100px", xs: "auto"}, m: {xs: "auto", sm: 0} }}
    />
  );
};
