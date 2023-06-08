import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Fab from "@mui/material/Fab";

function BuildingsView(props) {
  return (
    <Table sx={{ minWidth: 375 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">No</TableCell>
          <TableCell align="center">Site</TableCell>
          <TableCell align="center">Alerts</TableCell>
          <TableCell align="center">Savings</TableCell>
          <TableCell align="center">Uptime</TableCell>
          <TableCell align="center">Power</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              {index + 1}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="center"
            >
              {row.Name}
            </TableCell>

            <TableCell align="center">
              {row.Alerts.high.count >= 0 ? (
                row.Alerts.high.count > 0 ? (
                  <Fab color="primary" aria-label="high">
                    {row.Alerts.high.count}
                  </Fab>
                ) : (
                  <Fab disabled aria-label="high">
                    {row.Alerts.high.count}
                  </Fab>
                )
              ) : row.Alerts.high > 0 ? (
                <Fab color="primary" aria-label="high">
                  {row.Alerts.high}
                </Fab>
              ) : (
                <Fab disabled aria-label="high">
                  {row.Alerts.high}
                </Fab>
              )}{" "}
              {row.Alerts.med.count > 0 ? (
                <Fab color="warning" aria-label="med">
                  {row.Alerts.med.count}
                </Fab>
              ) : (
                <Fab disabled aria-label="med">
                  {row.Alerts.med.count}
                </Fab>
              )}{" "}
              {row.Alerts.low.count > 0 ? (
                <Fab color="error" aria-label="low">
                  {row.Alerts.low.count}
                </Fab>
              ) : (
                <Fab disabled aria-label="low">
                  {row.Alerts.low.count}
                </Fab>
              )}
            </TableCell>
            <TableCell align="center">{row.Savings}</TableCell>
            <TableCell align="center">{row.Uptime}</TableCell>
            <TableCell align="center" style={{ color: "rgb(60,179,113)" }}>
              {row.Power}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default BuildingsView;
