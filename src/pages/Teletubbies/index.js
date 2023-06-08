import { Title } from '../../components/Teletubbies/Title'
import { CardImg } from '../../components/Teletubbies/CardImg'
import { CardMain } from '../../components/Teletubbies/CardMain'
import { Container, Box, Card } from '@mui/material';
import teletubbiesData from '../../teletubbies.json';

export const Teletubbies = () => {
  return (
    <Container maxWidth = "lg">
      <Title />
      <Box>
        {teletubbiesData.map((item, index) => {
          return <Card key = {index}  sx={index % 2 == 0 ? 
            {
              display: "flex", marginBottom: "20px", paddingX: "10px",
            } 
            : 
            {
              display: "flex", marginBottom: "20px", paddingX: "10px", flexDirection: "row-reverse", justifyContent: "space-between"
            }}>
            <CardImg teletubby = {item}/>
            <CardMain teletubby = {item}/>
          </Card>
        })}
      </Box>
    </Container>
  )
}