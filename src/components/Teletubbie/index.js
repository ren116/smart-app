import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Teletubbie = ({ name, description, image_url, traits, way }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: `${way ? "row-reverse" : ""}`,
        m: "20px",
        gap: "40px",
        border: "2px black solid",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box sx={{ border: "dashed red 1px" }}>
          <img
            border="2px"
            src={image_url}
            alt={name}
          />
        </Box>
      </Box>
      <Box sx={{ p: "10px" }}>
        <Typography variant="h3" align="left">
          {name}
        </Typography>
        <Typography variant="body1" align="left" mb="2">
          {description}
        </Typography>
        <Typography marginTop={2} align="left">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {traits.map((item, key) => (
              <Box
                key={`trait_${key}`}
                sx={{ p: "5px", border: "solid 2px gray", px: "15px" }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};
export default Teletubbie;
