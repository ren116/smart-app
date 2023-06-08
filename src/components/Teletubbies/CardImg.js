import { CardMedia } from '@mui/material';

export const CardImg = (teletubby) => {
  return (
    <CardMedia
        component="img"
        alt={teletubby.name}
        image={teletubby.image_url}
        title={teletubby.name}
        sx={{width: "140px", height: "140px"}}
      />
  )
} 