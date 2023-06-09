import { Typography, Grid } from "@mui/material";
import TypoItem from "./TypoItem";
import FabItem from "./FabItem";

const BuildingItem = ({ num, name, alerts, saving, uptime, power }) => {
  return (
    <Grid
      container
      mt={2}
      py={2}
      sx={{
        boxShadow: 1,
        border: 2,
        borderColor: "primary.light",
        "&:hover": { border: 2, borderColor: "#6600ff", boxShadow: 3 },
        borderRadius: 3,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item xs={1}>
        <Typography>{num}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            fontSize: 18,
            fontFamily: "monospace",
            fontWeight: 900,
            textDecoration: "none",
          }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-evenly" },
        }}
      >
        {alerts.high.count === 0 || alerts.high === 0 ? (
          <FabItem
            count={alerts.high.count >= 0 ? alerts.high.count : alerts.high}
            bgColor={
              alerts.high.count > 0 || alerts.high > 0 ? "#3385ff" : "#e6e6e6"
            }
          />
        ) : (
          <FabItem
            count={alerts.high.count >= 0 ? alerts.high.count : alerts.high}
            bgColor={alerts.high.count >= 0 ? "#3385ff" : "#e6e6e6"}
          />
        )}
        <FabItem
          count={alerts.med.count}
          bgColor={alerts.med.count === 0 ? "#e6e6e6" : "#ff9900"}
        />
        <FabItem
          count={alerts.med.count}
          bgColor={alerts.med.count === 0 ? "#e6e6e6" : "#ff4850"}
        />
      </Grid>
      <TypoItem color="#b5b0b0" value={saving} />
      <TypoItem color="#b5b0b0" value={uptime} />
      <TypoItem color="#00e600" value={power} />
    </Grid>
  );
};

export default BuildingItem;