import React, { useEffect, useState } from 'react'
import { Container, Typography, Box } from '@mui/material'
import Teletubbie from 'components/Teletubbie'
import { getData } from 'api'

const Teletubbies = () => {
  const [data, setData] = useState([]);
  const [offset,setOffset] = useState(0);

  useEffect(() => {
    try{
      (async function () {
        const data = await getData()
        setData(data)
      })()
    }
    catch(err){
      throw err;
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000
      ) {
        setOffset(offset+20);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset])
  return (
    <Container maxWidth='xl'>
      <Typography variant='h1' sx={{ marginTop: '30px' }}>
        Teletubbies
      </Typography>
      {data.slice(0,20+offset)
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
