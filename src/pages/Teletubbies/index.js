import React, { useEffect, useState } from 'react'
import { Container, Typography, Box } from '@mui/material'
import Teletubbie from 'components/Teletubbie'

const Teletubbies = () => {
  const [data, setData] = useState([])
  return (
    <Container maxWidth='xl'>
      <Typography variant='h1' sx={{ marginTop: '30px' }}>
        Teletubbies
      </Typography>
      <TextField id='outlined-basic' label='Search by name' variant='outlined' />
      {data
         .map((item, key) => {
           return (
             <Teletubbie
               way={key % 2}
               key={`teletubbie_${key}`}
               name={item.name}
               description={item.description}
               traits={item.traits} />
           )
         })}
    </Container>
  )
}

export default Teletubbies
