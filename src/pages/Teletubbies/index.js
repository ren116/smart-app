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
          return <Card key = {index} sx={{display: "flex", marginBottom: "20px", paddingX: "10px"}}>
            {
              index % 2 == 0 ? 
              <>
                <CardImg teletubby = {item}/>
                <CardMain teletubby = {item}/>
              </>
              : 
              <>
                <CardMain teletubby = {item}/>
                <CardImg teletubby = {item}/>
              </>
            }
          </Card>
        })}
      </Box>
    </Container>
  )
}
