import React, { useState, useEffect, useMemo } from "react";
import BuildingsView from "components/Buildings";
import { BUILDINGS_SIZE } from "utils/constants";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { getBuildingsData } from "api";
import InfiniteScroll from "react-infinite-scroll-component";

function Buildings() {
  const [data, setData] = useState([]);
  const [pageLength, setPageLength] = useState(BUILDINGS_SIZE);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const temp = await getBuildingsData();
      setData(temp);
    };
    fetchData();
  }, []);
  
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  
  const filteredItems = useMemo(() => {
    return (
      data?.filter(
        (item) => item.Name.toLowerCase().indexOf(searchText) >= 0
      ) || []
    );
  }, [searchText, data]);

  const buildings = useMemo(() => {
    return filteredItems.slice(0, pageLength);
  }, [filteredItems, pageLength]);

  const paginate = () => {
    setPageLength((pageLength) => pageLength + BUILDINGS_SIZE);
  };

  const buildings = useMemo(() => {
    return data.slice(0, pageLength);
  }, [data, pageLength]);

  const paginate = () => {
    setPageLength((pageLength) => pageLength + 20);
  };

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
          sx={{ mb: 5 }}
        />
        <TableContainer component={Paper}>
          <InfiniteScroll
            dataLength={buildings.length}
            next={paginate}
            hasMore={true}
          >
            <BuildingsView data={buildings} />
          </InfiniteScroll>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Buildings;
