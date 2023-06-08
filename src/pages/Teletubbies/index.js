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

  // Render each Teletubby card
  const renderTeletubbyCard = (teletubby, index) => {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={index}>
        <img
          src={teletubby.image}
          alt={teletubby.name}
          style={{ width: "50%" }}
        />
        <div style={{ padding: "10px" }}>
          <h3>{teletubby.name}</h3>
          <p>{teletubby.description}</p>
          <div>
            {teletubby.traits.map((trait, i) => (
              <button key={i} style={{ margin: "5px" }}>
                {trait}
              </button>
            ))}
          </div>
        </div>
      </Grid>
    );
  };
}

export default Teletubbies;
