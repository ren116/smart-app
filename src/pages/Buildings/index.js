import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { amber, deepOrange, green, lightGreen } from "@mui/material/colors";

const Buildings = () => {
  const [buildings, setBuildings] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetch("/buildings.json")
      .then((response) => response.json())
      .then((data) => {
        let newTypeBuildings = data.buildings.map((item) => {
          return {
            site: item.Name,
            alerts: {
              high:
                item.Alerts.high.count === undefined
                  ? 0
                  : item.Alerts.high.count,
              med:
                item.Alerts.med.count === undefined ? 0 : item.Alerts.med.count,
              low:
                item.Alerts.low.count === undefined ? 0 : item.Alerts.low.count,
            },
            savings: Number(item.Savings.slice(0, -1)),
            uptime: Number(item.Uptime.slice(0, -1)),
            power: Number(item.Power.slice(0, -2)),
          };
        });
        setBuildings(newTypeBuildings);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setOffset(offset + 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  const onchange = (event) => {
    setSearchWord(event.target.value.toLowerCase());
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 7,
          mb: 1,
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 900,
            fontSize: 40,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          BUILDINGS
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 5,
          mb: 1,
        }}
      >
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          sx={{ width: 1000 }}
          onChange={onchange}
        />
      </Box>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 18, color: "grey" }}>
                  Site ˅
                </TableCell>
                <TableCell align="left" sx={{ fontSize: 18, color: "grey" }}>
                  Alerts ˅
                </TableCell>
                <TableCell align="left" sx={{ fontSize: 18, color: "grey" }}>
                  Savings ˅
                </TableCell>
                <TableCell align="left" sx={{ fontSize: 18, color: "grey" }}>
                  Uptime ˅
                </TableCell>
                <TableCell align="left" sx={{ fontSize: 18, color: "grey" }}>
                  Power ˅
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buildings
                .filter((list) => list.site.toLowerCase().includes(searchWord))
                .slice(0, 20 + offset)
                .map((row, key) => {
                  return (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      key={"row-" + key}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          fontFamily: "arial",
                          fontWeight: 900,
                          fontSize: 20,
                          color: "inherit",
                        }}
                        key={"cell-" + key * 5 + 0}
                      >
                        {row.site}
                      </TableCell>
                      <TableCell align="left" key={"cell-" + key * 5 + 1}>
                        <Stack direction="row" spacing={2} key={"stack-" + key}>
                          <Avatar
                            sx={row.alerts.high ? { bgcolor: green[500] } : {}}
                            key={"avatar-" + key * 3 + 0}
                          >
                            {row.alerts.high}
                          </Avatar>
                          <Avatar
                            sx={row.alerts.med ? { bgcolor: amber[500] } : {}}
                            key={"avatar-" + key * 3 + 1}
                          >
                            {row.alerts.med}
                          </Avatar>
                          <Avatar
                            sx={
                              row.alerts.low ? { bgcolor: deepOrange[500] } : {}
                            }
                            key={"avatar-" + key * 3 + 2}
                          >
                            {row.alerts.low}
                          </Avatar>
                        </Stack>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={[
                          {
                            fontFamily: "arial",
                            fontSize: 18,
                            color: "grey",
                          },
                          row.savings < 100 && { color: "red" },
                        ]}
                        key={"cell-" + key * 5 + 2}
                      >
                        {row.savings + "%"}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={[
                          {
                            fontFamily: "arial",
                            fontSize: 18,
                            color: "grey",
                          },
                          row.uptime < 100 && { color: "red" },
                        ]}
                        key={"cell-" + key * 5 + 3}
                      >
                        {row.uptime + "%"}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontFamily: "arial",
                          fontSize: 20,
                          color: lightGreen[500],
                        }}
                        key={"cell-" + key * 5 + 4}
                      >
                        {row.power + "KW"}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Buildings;
