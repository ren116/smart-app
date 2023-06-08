import React, { useState, useEffect } from "react";
import { BuildingsView } from "components/Buildings";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { getBuildingsData } from "api";

function Buildings() {
  const [data, setData] = useState([]);
  const [end, setEnd] = useState();
  const [searchText, setSearchText] = useState();
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const temp = await getBuildingsData();
      setData(temp);
    };
    fetchData();
    setEnd(20);
  }, []);
  
  return (
    <div className="container">
      <Container sx={{ mt: 15 }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search"
          variant="outlined"
          name="searchText"
          value={searchText}
          onChange={handleChange}
        />
        <TableContainer component={Paper}>
          <BuildingsView data={data} end={end} />
        </TableContainer>
      </Container>
    </div>
  );
}

export default Buildings;
