import { Fab, Typography } from "@mui/material";

const FabItem = ({ count, bgColor }) => {
  return (
    <Fab sx={{ backgroundColor: bgColor }} size="small" aria-label="low">
      <Typography>{count}</Typography>
    </Fab>
  );
};

export default FabItem;
