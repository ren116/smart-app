import { CardContent, Typography, Chip } from '@mui/material';

export const CardMain = (teletubby) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {teletubby.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {teletubby.description}
      </Typography>
      <div sx={{ mt: 2 }}>
      </div>
    </CardContent>
  )
} 