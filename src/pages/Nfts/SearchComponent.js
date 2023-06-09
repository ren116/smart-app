import { TextField } from "@mui/material";

const SearchComponent = ({ search_value, search_event }) => {
  return (
    <>
      <TextField
        value={search_value}
        id="outline-basic"
        label="Search..."
        onChange={search_event}
      />
    </>
  );
};
export default SearchComponent;
