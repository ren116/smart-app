import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import Data from "../../teletubbies.json";
import { styled } from "@mui/material/styles";
import { buttonstyle } from "./style.js";

const Teletubbies = () => {
  const [dataList, setDataList] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    setDataList(Data.slice(0, 20));
  }, []);

  useEffect(() => {
    // Add scroll listener on mount
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove scroll listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      searchKey === ""
    ) {
      // Load the next 20 Teletubbies if search term is empty
      const startIndex = dataList.length;
      const endIndex = startIndex + 20;
      setDataList([...dataList, ...Data.slice(startIndex, endIndex)]);
    }
  }

  useEffect(() => {
    // Add scroll listener on mount
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove scroll listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const filteredTeletubbies = dataList.filter((teletubby) =>
    teletubby.name.toLowerCase().includes(searchKey.toLowerCase())
  );

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "5px",
  });

  const Div = styled("div")({
    width: "80%",
    heigth: "100px",
    display: "line-block",
    textAlign: "start",
  });

  const Section = styled("section")({
    height: "25px",
    display: "line-block",
    textAlign: "center",
    border: "1px grey solid",
    backgroundColor: "white",
    borderRadius: "3px",
    fontSize: "16px",
    padding: "0 10px 0 10px",
    marginRight: "2%",
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    justifyContent: "start",
  }));

  return (
    <>
      <Typography variant="h2" sx={{ marginTop: "64px" }}>
        Teletubbies
      </Typography>

      <TextField
        label="Search"
        variant="standard"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />

      {filteredTeletubbies.map((data, key) => (
        <Container key={key} sx={{ px: { xs: "50px", md: "100px" } }}>
          <Paper
            sx={{
              p: 5,
              margin: "auto",
              maxWidth: "lg",
              backgroundColor: "#fff",
              marginTop: "30px",
            }}
          >
            <Grid container>
              {key % 2 ? (
                <Grid
                  sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Div item sm="auto" container>
                    <Grid item xs container direction="row" spacing={2}>
                      <Grid item xs>
                        <Typography
                          sx={{
                            textAlign: { xs: "center", md: "left" },
                            pt: 2,
                          }}
                          gutterBottom
                          variant="h4"
                          component="div"
                        >
                          {data.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {data.description}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "start",
                      }}
                    >
                      {data.traits.map((name, index) => (
                        <Section
                          key={index}
                          sx={{
                            marginTop: {
                              xs: "5px",
                              sm: "0px",
                              display: "flex",
                              justifyContent: "center",
                              fontFamily: "monospace",
                              alignItems: "center",
                            },
                          }}
                        >
                          {name}
                        </Section>
                      ))}
                    </Grid>
                  </Div>
                  <Grid item>
                    <ButtonBase sx={buttonstyle}>
                      <Img alt="complex" src={data.image_url} />
                    </ButtonBase>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: { xs: "column", md: "row" },
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item>
                    <ButtonBase sx={buttonstyle}>
                      <Img alt="complex" src={data.image_url} />
                    </ButtonBase>
                  </Grid>
                  <Div item sm="auto" container>
                    <Grid item xs container direction="row" spacing={2}>
                      <Grid item xs>
                        <Typography
                          sx={{
                            textAlign: { xs: "center", md: "left" },
                            pt: 2,
                          }}
                          gutterBottom
                          variant="h4"
                          component="div"
                        >
                          {data.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {data.description}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "start",
                      }}
                    >
                      {data.traits.map((name, index) => (
                        <Section
                          key={index}
                          sx={{
                            marginTop: {
                              xs: "5px",
                              sm: "0px",
                              display: "flex",
                              justifyContent: "center",
                              fontFamily: "monospace",
                              alignItems: "center",
                            },
                          }}
                        >
                          {name}
                        </Section>
                      ))}
                    </Grid>
                  </Div>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Container>
      ))}
    </>
  );
};

export default Teletubbies;
