import React, { useState, useRef, useEffect } from "react";
import { Grid, TextField, Typography } from "@mui/material"

const Teletubbies = () => {
  const [teletubbies, setTeletubbies] = useState([]);
  useEffect(() => {
    fetch("/teletubbies.json")
      .then((response) => response.json())
      .then((data) => {
        setTeletubbies(data);
      });
  }, []);
}

export default Teletubbies;
