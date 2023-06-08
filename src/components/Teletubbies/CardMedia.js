import { CardMedia } from '@mui/material';

export const CardContent = () => {
  return (
    <CardMedia
        component="img"
        alt={teletubby.name}
        height="140"
        image={teletubby.image}
        title={teletubby.name}
      />
  )
} 