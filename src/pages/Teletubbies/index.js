import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Teletubbie from 'components/Teletubbie'

const Teletubbies = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase())
  }
  return (
    <Container maxWidth='xl'>
      <Typography variant='h1' sx={{ marginTop: '30px' }}>
        Teletubbies
      </Typography>
      <TextField
        id='outlined-basic'
        value={searchTerm}
        onChange={handleSearch}
        label='Search by name'
        variant='outlined' />
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
