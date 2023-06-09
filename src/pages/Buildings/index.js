import { useState } from "react";
import Box from "@mui/material/Box";
import { Container, TextField } from "@mui/material";
import BuildTable from "components/Table";

export default function NFTS() {
  const [handleSearch, setHandleSearch] = useState("");

  return (
    <Container maxWidth="xl" sx={{ mt: "80px" }}>
      <Box sx={{ width: { sm: "100%", lg: "1138px" }, m: "auto" }}>
        <TextField
          fullWidth
          label="Search"
          value={handleSearch}
          onChange={(event) => {
            setHandleSearch(event.target.value.toLowerCase());
          }}
        />
        <BuildTable handleSearch={handleSearch} />
      </Box>
    </Container>
  );
}
