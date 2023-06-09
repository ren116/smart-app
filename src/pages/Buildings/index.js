import React, { useState, useEffect, useMemo } from "react";
import BuildingsView from "components/Buildings";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { getBuildingsData } from "api";
import InfiniteScroll from "react-infinite-scroll-component";

function Buildings() {
  const [data, setData] = useState([]);
  const [pageLength, setPageLength] = useState(20);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const temp = await getBuildingsData();
      setData(temp);
    };
    fetchData();
  }, []);

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
