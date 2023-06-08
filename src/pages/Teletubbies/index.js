import React, { useEffect, useState } from 'react'
import { Container, Typography, Box } from '@mui/material'
import Teletubbie from 'components/Teletubbie'
import { getData } from 'api'

const Teletubbies = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      const data = await getData()
      setData(data)
    })()
  }, []);
  return (
    <Container maxWidth='xl'>
      <Typography variant='h1' sx={{ marginTop: '30px' }}>
        Teletubbies
      </Typography>
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
