import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Data from "../../teletubbies.json";

const Teletubbies = () => {
  const [dataList, setDataList] = useState("");
  useEffect(() => {
    setDataList(Data);
  }, []);


  return (
    <>
      <Header />
      <Typography variant="h2">Teletubbies</Typography>
      <TextField label="Search" variant="standard" />

      
    </>
  );
};
export default Teletubbies;
