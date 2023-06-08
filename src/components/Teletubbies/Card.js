import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';

export const Title = () => {
  return (
      <Card sx={{ height: '100%' }}>
        <CardMedia component="img" image={tubby.image} alt={tubby.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tubby.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tubby.description}
          </Typography>
          <div sx={{ mt: 2 }}>
            {tubby.tags.map(tag => (
              <Chip key={tag} label={tag} sx={{ mr: 1, mb: 1 }} />
            ))}
          </div>
        </CardContent>
      </Card>
  )
} 