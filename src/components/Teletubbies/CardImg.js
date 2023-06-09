import { CardMedia } from '@mui/material';

export const CardImg = (teletubby) => {
  return (
    <CardMedia
      component="img"
      alt={teletubby.name}
      image={teletubby.image_url}
      title={teletubby.name}
      sx={{minWidth: "100px", width: "100px", height: "100px"}}
    />
  )
} 