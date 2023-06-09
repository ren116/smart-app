import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import Data from "../../teletubbies.json";
import Style from "../../style.json";

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

  const filteredTeletubbies = dataList.filter((teletubby) =>
    teletubby.name.toLowerCase().includes(searchKey.toLowerCase())
  );

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

<<<<<<< Updated upstream
=======

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


<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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

  const Section = styled("Section")({
    height: "25px",
    display: "line-block",
    textAlign: "center",
    border: "1px grey solid",
    backgroundColor: "white",
    borderRadius: "3px",
    fontSize: "20px",
    padding: "0 10px 0 10px",
    marginRight: "20px",
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
      <Header />
      <Typography variant="h2">Teletubbies</Typography>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <TextField
        label="Search"
        variant="standard"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
=======
      <TextField label="Search" variant="standard" value={searchKey} onChange={(e) => setSearchKey(e.target.value)}/>
>>>>>>> Stashed changes
=======
      <TextField label="Search" variant="standard" value={searchKey} onChange={(e) => setSearchKey(e.target.value)}/>
>>>>>>> Stashed changes

      {filteredTeletubbies.map((data, key) => (
        <Paper
          sx={{
            p: 5,
            margin: "auto",
            maxWidth: "lg",
            backgroundColor: "#fff",
            marginTop: "30px",
          }}
        >
          <Grid container spacing={2}>
            {key % 2 ? (
              <>
                <Div item sm="auto" container>
                  <Grid item xs container direction="row" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h4" component="div">
                        {data.name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {data.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <div style={{ display: "flex" }}>
                    {data.traits.map((name,key)=>(
                      <Section>{data.traits[key]}</Section>
                    ))}
                  </div>
                </Div>
                <Grid item>
                  <ButtonBase sx={Style}>
                    <Img alt="complex" src={data.image_url} />
                  </ButtonBase>
                </Grid>
              </>
            ) : (
              <>
                <Grid item>
                  <ButtonBase sx={Style}>
                    <Img alt="complex" src={data.image_url} />
                  </ButtonBase>
                </Grid>
                <Div item sm="auto" container>
                  <Grid item xs container direction="row" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h4" component="div">
                        {data.name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {data.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <div style={{ display:"flex",  flexWarp:"wrap" }}>
                    {data.traits.map((name,key)=>(
                      <Section>{data.traits[key]}</Section>
                    ))}
                  </div>
                </Div>
              </>
            )}
          </Grid>
        </Paper>
      ))}
    </>
  );
};
export default Teletubbies;
