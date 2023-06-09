import React, { useState } from "react";
import { Container, Box, Card, TextField } from "@mui/material";
import originalteletubbiesData from "../../teletubbies.json";
import InfiniteScroll from "react-infinite-scroll-component";
import { Title } from "../../components/Teletubbies/Title";
import { CardImg } from "../../components/Teletubbies/CardImg";
import { CardMain } from "../../components/Teletubbies/CardMain";

const allTeletubbiesData = originalteletubbiesData;

export const Teletubbies = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [teletubbies, setTeletubbies] = useState(originalteletubbiesData.slice(0, 20));

  const leftPlaceCss = {
    display: "flex",
    marginBottom: "20px",
    paddingX: "10px",
  }

  const RightPlaceCss = {
    display: "flex",
    marginBottom: "20px",
    paddingX: "10px",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  }

  const filterOptions = (e) => {
    setSearchTerm(e.target.value);

    const filteredItems = originalteletubbiesData.filter((teletubby) =>
      teletubby.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setTeletubbies(filteredItems.slice(0, page * 20));
    originalteletubbiesData = filteredItems;

    if (e.target.value == "") {
      originalteletubbiesData = allTeletubbiesData;
      setTeletubbies(originalteletubbiesData.slice(0, 20));
    }
  };

  const loadMoreTeletubbies = () => {
    setTeletubbies(originalteletubbiesData.slice(0, page * 20));
    if (teletubbies.length <= originalteletubbiesData.length) {
      setPage(page + 1);
    }
  };
  
  return (
    <Container maxWidth="lg">
      <Title />
      <Box sx={{ display: "flex", mb: {sm: 0, xs: 5}, mt: {sm:-2, xs: 5}, justifyContent: {xs: "center", sm: "flex-end"} }}>
        <TextField
          id="outlined-Password"
          label="search..."
          variant="outlined"
          size="small"
          onChange={filterOptions}
          value={searchTerm}  
        />
      </Box>
      <Box>
        <InfiniteScroll
          dataLength={page * 20}
          next={loadMoreTeletubbies}
          hasMore={true}
        >
          {teletubbies.map((item, index) => {
            return (
              <Card
                key={index}
                sx={
                  index % 2 == 0
                  ? 
                  leftPlaceCss
                  : 
                  RightPlaceCss
                }
              >
                <CardImg cardInfo={item} />
                <CardMain cardInfo={item} />
              </Card>
            );
          })}
        </InfiniteScroll>
      </Box>
    </Container>
  );
};
