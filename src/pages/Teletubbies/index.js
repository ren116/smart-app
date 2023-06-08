import React, { useEffect, useState } from 'react'
import { Container, Typography, Box } from '@mui/material'

const Teletubbies = () => {
  const [data, setData] = useState([])
  return (
    <Container maxWidth='xl'>
      <Typography variant='h1' sx={{ marginTop: '30px' }}>
        Teletubbies
      </Typography>
      {data.slice(0, 20 + offset)
         .filter(list => list.name.toLowerCase().includes(searchTerm))
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
