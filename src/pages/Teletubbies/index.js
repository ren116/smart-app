import React, { useState, useEffect } from 'react';
import { Container, Box, Card } from '@mui/material';
import teletubbiesData from '../../teletubbies.json';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Title } from '../../components/Teletubbies/Title'
import { CardImg } from '../../components/Teletubbies/CardImg'
import { CardMain } from '../../components/Teletubbies/CardMain'

export const Teletubbies = () => {
  const [page, setPage] = useState(1);
  const [teletubbies, setTeletubbies] = useState(teletubbiesData.slice(0, 20));
  const loadMoreTeletubbies = () => {
    setTeletubbies([...teletubbies, ...teletubbiesData.slice(0, page * 20)]);
    setPage(page + 1);
  };
  return (
    <Container maxWidth = "lg">
      <Title />
      <Box>
        
      <InfiniteScroll
          dataLength={page * 20}
          next={loadMoreTeletubbies}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          >
          {teletubbies.map((item, index) => {
            return <Card key = {index}  sx={index % 2 == 0 ? 
              {
                display: "flex", marginBottom: "20px", paddingX: "10px",
              } 
              : 
              {
                display: "flex", marginBottom: "20px", paddingX: "10px", flexDirection: "row-reverse", justifyContent: "space-between"
              }}> {index}
              <CardImg teletubby = {item}/>
              <CardMain teletubby = {item}/>
            </Card>
            
            })
          }
          </InfiniteScroll>
        
      </Box>
      
    </Container>
  )
}