import { getBuildingData } from "api";
import { useState, useMemo, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeadWrapper from "./TableHeadWrapper";
import TableToolbar from "./TableToolbar";
import TableBodyWrapper from "./TableBodyWrapper";

export default function BuildTable({ handleSearch }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [selected, setSelected] = useState([]);
  const page = 0;
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [building, setBuilding] = useState([]);

  const getBuilds = async () => {
    try {
      const response = await getBuildingData();
      setBuilding(response.data.buildings);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBuilds();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 800
      ) {
        setRowsPerPage(rowsPerPage + 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rowsPerPage]);

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = building.map((n, index) => index);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const visibleRows = useMemo(() => {
    function stableSort(array, comparator) {
      const stabilizedThis = array.map((el, index) => [el, index]);
      stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
          return order;
        }
        return a[1] - b[1];
      });
      return stabilizedThis.map((el) => el[0]);
    }
    function getComparator(order, orderBy) {
      return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }
    return stableSort(building, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [order, orderBy, page, rowsPerPage, building]);

  return (
    <Paper sx={{ width: "100%" }}>
      <TableToolbar numSelected={selected.length} />
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHeadWrapper
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={building.length}
          />
          <TableBodyWrapper
            visibleRows={visibleRows}
            handleSearch={handleSearch}
            isSelected={isSelected}
            handleClick={handleClick}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
}
