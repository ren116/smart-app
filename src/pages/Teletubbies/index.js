import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Teletubbie from 'components/Teletubbie'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { getTeletubbies } from 'api'

const Teletubbies = () => {
  const [teletubbies, setTeletubbies] = useState([])
  const [offset, setOffset] = useState(0)
  const [searchWord, setSearchWord] = useState('')
  const [alert, setAlert] = React.useState(false);
  
  const handleSearch = event => {
    setSearchWord(event.target.value.toLowerCase())
  }

  useEffect(() => {
    try{
      (async function () {
        const teletubbies = await getTeletubbies()
        setTeletubbies(teletubbies)
      })()
    }
    catch(err){
      setAlert(true);//display alert
    }
  }, []);
  
  useEffect(() => {
    const handleScroll = () => { //scroll event
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
          setOffset(offset+20);
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset])
  //close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };
  const show = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Container maxWidth='xl'>
      <Typography variant='h1' sx={{ marginTop: '30px' }}>
        Teletubbies
      </Typography>
      <TextField
        id='outlined-basic'
        value={searchWord}
        onChange={handleSearch}
        label='Search by name'
        variant='outlined'
      />
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Fail in load"
        action={show}
      />
      {teletubbies.slice(0 , 20+offset)
        .filter(list=>list.name.toLowerCase().includes(searchWord))
        .map((item, key) => {
          return (
            <Teletubbie
              way={key % 2}
              key={`teletubbie_${key}`}
              name={item.name}
              description={item.description}
              traits={item.traits} 
            />
          )
        })}
    </Container>
  )
}

export default Teletubbies
