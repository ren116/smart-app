import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import { Avatar, Chip } from "@mui/material";

export default function BodyTable({
  visibleRows,
  handleSearch,
  isSelected,
  handleClick,
}) {
  return (
    <TableBody>
      {visibleRows
        .filter(
          (rows) =>
            String(rows.Uptime).toLowerCase().includes(handleSearch) ||
            String(rows.Savings).toLowerCase().includes(handleSearch) ||
            String(rows.Power).toLowerCase().includes(handleSearch) ||
            rows.Name.toLowerCase().includes(handleSearch)
        )
        .map((row, index) => {
          const isItemSelected = isSelected(index);
          const labelId = `enhanced-table-checkbox-${index}`;
          return (
            <TableRow
              hover
              onClick={(event) => handleClick(event, index)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={index}
              selected={isItemSelected}
              sx={{
                cursor: "pointer",
                border: `${isItemSelected ? "blue 3px solid" : ""}`,
              }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </TableCell>
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {index + 1}
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                {row.Name}
              </TableCell>
              <TableCell align="left" sx={{ display: "flex", gap: "10px" }}>
                <Avatar
                  sx={{
                    bgcolor: `${row.Alerts.high.count ? "#3df696" : "#ebebeb"}`,
                  }}
                >
                  {row.Alerts.high.count}
                </Avatar>
                <Avatar
                  sx={{
                    bgcolor: `${row.Alerts.med.count ? "#f69e3d" : "#ebebeb"}`,
                  }}
                >
                  {row.Alerts.med.count}
                </Avatar>
                <Avatar
                  sx={{
                    bgcolor: `${row.Alerts.low.count ? "#ff4850" : "#ebebeb"}`,
                  }}
                >
                  {row.Alerts.low.count}
                </Avatar>
              </TableCell>
              <TableCell align="right">
                <Chip
                  label={row.Savings}
                  variant="outlined"
                  sx={{
                    width: "58px",
                    bgcolor: `${parseInt(row.Savings) > 70 ? "" : "pink"}`,
                    color: `${parseInt(row.Savings) > 70 ? "" : "red"}`,
                  }}
                />
              </TableCell>
              <TableCell align="right">
                <Chip
                  label={row.Uptime}
                  variant="outlined"
                  sx={{
                    width: "58px",
                    bgcolor: `${parseInt(row.Uptime) > 70 ? "" : "pink"}`,
                    color: `${parseInt(row.Uptime) > 70 ? "" : "red"}`,
                  }}
                ></Chip>
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "#00b900", fontWeight: "bold" }}
              >
                {row.Power}
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
}
