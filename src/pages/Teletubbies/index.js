import React, { useState } from "react";
import { Container, Box, Card, Pagination, TextField } from "@mui/material";
import teletubbiesData from "../../teletubbies.json";
import InfiniteScroll from "react-infinite-scroll-component";
import { Title } from "../../components/Teletubbies/Title";
import { CardImg } from "../../components/Teletubbies/CardImg";
import { CardMain } from "../../components/Teletubbies/CardMain";

const savedTeletubbiesData = teletubbiesData;

export const Teletubbies = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [teletubbies, setTeletubbies] = useState(teletubbiesData.slice(0, 20));

  const filterOptions = (e) => {
    setSearchTerm(e.target.value);
    const filteredItems = teletubbiesData.filter((teletubby) =>
      teletubby.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTeletubbies(filteredItems.slice(0, page * 20));
    teletubbiesData = filteredItems;
    if (e.target.value == "") {
      teletubbiesData = savedTeletubbiesData;
      setTeletubbies(teletubbiesData.slice(0, 20));
    }
  };

  const loadMoreTeletubbies = () => {
    setTeletubbies(teletubbiesData.slice(0, page * 20));
    if (teletubbies.length <= teletubbiesData.length) {
      setPage(page + 1);
    }
  };
  
  return (
    <Container maxWidth="lg">
      <Title />
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 5 }}>
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
                    ? {
                      display: "flex",
                      marginBottom: "20px",
                      paddingX: "10px",
                    }
                    : {
                      display: "flex",
                      marginBottom: "20px",
                      paddingX: "10px",
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                    }
                }
              >
                <CardImg teletubby={item} />
                <CardMain teletubby={item} />
              </Card>
            );
          })}
        </InfiniteScroll>
      </Box>
    </Container>
  );
};
