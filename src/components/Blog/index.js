import React, { useState, useEffect } from 'react'
import { useCallback } from 'react'

import { CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { Container, Grid, Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { getBlogData } from 'api/nfts';

const Blog = () => {
  const [blogdata, setblogdata] = useState([])
  const [filterBlog, setFilterBlog] = useState([])
  const [offset, setOffset] = useState(0)
  const [searchStr, setSearchStr] = useState('')
  const getBlog = useCallback(async () => {
  try {
    const response = await getBlogData();
    const data = response.data;
    setblogdata([...blogdata, ...data.results])
    setFilterBlog([...blogdata, ...data.results])
    setOffset(offset + 20)
  } catch (error) {
    throw error;
  }
}, [offset, blogdata]);
  
  const handleSearch = e => {
    setSearchStr(e.target.value.toLowerCase())
  }
  useEffect(() => {
    getBlog();
  }, [])

  useEffect(() => {
    setFilterBlog(
      blogdata.filter(item =>
        item.collectionName.toLowerCase().includes(searchStr)
      )
    )
  }, [blogdata, searchStr])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        getBlog();
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset,getBlog])

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", padding: '30px' }}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'end', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search NFT"
            inputProps={{ 'aria-label': 'search google maps' }}
            value={searchStr}
            onChange={handleSearch}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
      </Box>
      <Container maxWidth="xl">
        <div id='blogdata'>
          <Grid container spacing={10}>
            {(filterBlog.map((item,k) => (
              <Grid key={"grid"+k} item lg={3} md={4} sm={6} xs={12} >
                <CardActionArea>
                  <CardMedia key={"cardmedia"+k}
                    component="img"
                    image={item.img}
                    onError={(e) => { e.target.onerror = null; e.target.src = "error.jpg" }}
                    alt={item.bear}
                  />
                  <CardContent sx={{ display: 'flex', justifyContent: "space-between", backgroundColor: "#80cbc4" }}>
                    <Typography gutterBottom variant="p" key={"name"+k*2+0}>
                      {item.collectionName}
                    </Typography>
                    <Typography variant="p" key={"name"+k*2+1}>
                      ($){item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            )))}
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Blog;
