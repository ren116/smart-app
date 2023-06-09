import { Box } from "@mui/material";
const ImgComponent = ({ img_url, img_name, img_price }) => {
  return (
    <>
      <div className="img-background">
        <img
          width="100%"
          height="100%"
          src={img_url}
          alt="Invalid path. please check again"
        />
      </div>
      <div>
        <Box display="flex" justifyContent="space-between">
          <h2>{img_name}</h2>
          <h2>{img_price}$</h2>
        </Box>
      </div>
    </>
  );
};
export default ImgComponent;
