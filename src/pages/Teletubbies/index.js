import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";
import {getCurrenTeletubbyData} from "api";
import SearchIcon from "@mui/icons-material/Search";

const Teletubbies = () => {
  const [teletubbies, setTeletubbies] = useState([]);
  const [page, setPage] = useState(1); // keep track of current page number
  const [searchQuery, setSearchQuery] = useState(""); // keep track of search query

 
  const getTeletubbies = async () => {
    try {
      const response = await getCurrenTeletubbyData();
      const newTeletubbies = response.data.slice((page - 1) * 20, page * 20); // fetch only 20 teletubbies per page
      setTeletubbies((prevTeletubbies) => [
        ...prevTeletubbies,
        ...newTeletubbies,
      ]); // concatenate the new teletubbies with the existing ones
      setPage((prevPage) => prevPage + 1); // increment the page number
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeletubbies();
  }, []); // fetch the first set of teletubbies on mount

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        getTeletubbies(); // fetch more teletubbies when scroll position reaches the end
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [teletubbies]); // add a scroll event listener and remove it on cleanup, while also watching for changes in the teletubbies array

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTeletubbies = teletubbies.filter((teletubby) =>
    teletubby.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Container>
        <Grid>
          <Typography
            variant="h2"
            sx={{
              border: "3px solid",
              borderColor: "primary.main",
              color: "Blue",
              padding: 4,
              boxShadow: 3,
              fontFamily: "Cherry Bomb One",
            }}
            mt={4}
            mb={3}
          >
            Teletubbies
          </Typography>
        </Grid>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Teletubbies by name"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="center">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              bgcolor: "background.paper",
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.light",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "secondary.main",
              },
              "& .MuiOutlinedInput-input": {
                color: "text.primary",
              },
              "& .MuiInputLabel-root": {
                color: "text.secondary",
              },
            },
          }}
        />

        {filteredTeletubbies.map((teletubby, index) => (
          <Grid key={index}>
            <>
              <Grid
                container
                alignItems="center"
                sx={{
                  border: "2px solid",
                  borderColor: "success.main",
                  boxShadow: 2,
                }}
                p={2}
                my={2}
                direction={`${index % 2 ? "row-reverse" : ""}`}
              >
                <Grid item xs={12} md={3} lg={3}>
                  <div className="img-container">
                    <img
                      src={teletubby.image_url}
                      alt={teletubby.image_url}
                      style={{
                        width: "180px",
                        height: "180px",
                        padding: "auto",
                      }}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={9} lg={9}>
                  <Grid component="div">
                    <Typography
                      variant="h4"
                      component="div"
                      align="left"
                      sx={{ px: 2, my: 1,fontFamily: "Cherry Bomb One", }}
                    >
                      {teletubby.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ px: 2, my: 1 }}
                    >
                      {teletubby.description}
                    </Typography>
                    <Grid container spacing={2} justifyContent="flex-start">
                      {teletubby.traits.map((item, key) => {
                        return (
                          <Grid item key={key} my={1}>
                            <Paper variant="outlined" sx={{ p: 1 }}>
                              {item}
                            </Paper>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          </Grid>
        ))}
      </Container>
    </>
  );
};

export default Teletubbies;
