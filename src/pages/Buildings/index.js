import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Margin } from "@mui/icons-material";

const row = {
  site: "Barley",
  alerts: { high: 0, med: 3, low: 1 },
  savings: 89,
  uptime: 104,
  power: 1165,
};

const Buildings = () => {
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
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Site ˅</TableCell>
                <TableCell align="left">Alerts ˅</TableCell>
                <TableCell align="left">Savings ˅</TableCell>
                <TableCell align="left">Uptime ˅</TableCell>
                <TableCell align="left">Power ˅</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.site}
                  </TableCell>
                  <TableCell align="left">
                    {row.alerts.high +
                      " " +
                      row.alerts.med +
                      " " +
                      row.alerts.low}
                  </TableCell>
                  <TableCell align="left">{row.savings + "%"}</TableCell>
                  <TableCell align="left">{row.uptime + "%"}</TableCell>
                  <TableCell align="left">{row.power + "KW"}</TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Buildings;
