import { Avatar } from "@mui/material";
import { Box } from "@mui/material";

export const Title = () => (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <Avatar
      alt="Logo"
      src="./teletubbies_logo.png"
      variant="square"
      sx={{ width: "auto", height: 180, mt: 2 }}
    />
  </Box>
)
