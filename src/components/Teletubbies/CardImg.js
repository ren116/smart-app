import { CardMedia } from '@mui/material';

export const CardImg = (teletubby) => {
  return (
    <CardMedia
        component="img"
        alt={teletubby.name}
        height="140"
        image={teletubby.image_url}
        title={teletubby.name}
      />
  )
} 