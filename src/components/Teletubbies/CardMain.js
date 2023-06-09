import { CardContent, Typography, Chip } from "@mui/material";

export const CardMain = (props) => {
  return (
    <CardContent
      align="left"
      sx={{ padding: "10px", paddingBottom: "0px !important" }}
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ color: props.cardInfo.color, fontFamily: "bubble !important" }}
      >
        {props.cardInfo.name}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {props.cardInfo.description}
      </Typography>

      <div>
        {props.cardInfo.traits.map((tag) => (
          <Chip
            size="small"
            key={tag}
            label={tag}
            sx={
              {
                mr: 1,
                mb: 1,
                mt: 1,
                color: props.cardInfo.color,
                backgroundColor: "transparent",
                fontWeight: "bold",
                fontSize: "14px"
              }
            }
          />
        ))}
      </div>
    </CardContent>
  );
};
