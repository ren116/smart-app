import { Title } from '../../components/Teletubbies/Title'
/* import { CardMain } from '../../components/Teletubbies/CardMain' */
import { CardImg } from '../../components/Teletubbies/CardImg'
import { Container, Box, Card } from '@mui/material';
import teletubbiesData from '../../teletubbies.json';

export const Teletubbies = () => {
  return (
    <Container maxWidth = "lg">
      <Title />
      <Box>
        {teletubbiesData.map((item, index) => {
          <CardImg teletubby = {item}/>
        })}
      </Box>
    </Container>
  )
}