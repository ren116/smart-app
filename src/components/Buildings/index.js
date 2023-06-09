import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Fab from "@mui/material/Fab";

export const BuildingsView = (props) => {
  return (
    <Table sx={{ minWidth: 375 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Site</TableCell>
          <TableCell align="left">Alerts</TableCell>
          <TableCell align="left">Savings</TableCell>
          <TableCell align="left">Uptime</TableCell>
          <TableCell align="left">Power</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map(
          (row, index) =>
            index < props.end && (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {row.Name}
                </TableCell>
                <TableCell align="left">
                  <Fab color="primary" aria-label="high">
                    {row.Alerts.high.count >= 0
                      ? row.Alerts.high.count
                      : row.Alerts.high}
                  </Fab>
                  <Fab color="secondary" aria-label="med">
                    {row.Alerts.med.count}
                  </Fab>
                  <Fab disabled aria-label="low">
                    {row.Alerts.low.count}
                  </Fab>
                </TableCell>
                <TableCell align="left">{row.Savings}</TableCell>
                <TableCell align="left">{row.Uptime}</TableCell>
                <TableCell align="left">{row.Power}</TableCell>
              </TableRow>
            )
        )}
      </TableBody>
    </Table>
  );
};
