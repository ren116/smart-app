import { Title } from '../../components/Teletubbies/Title'
import { Container } from '@mui/material';
import teletubbiesData from '../../teletubbies.json';

export const Teletubbies = () => {
  return (
    <Container maxWidth = "lg">
      <Title />
    </Container>
  )
}