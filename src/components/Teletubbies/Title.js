import { Avatar } from '@mui/material';
import  Box  from '@mui/material/Box';

export const Title = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar alt="Logo" src="./teletubbies_logo.png" variant="square" sx={{ width: "auto", height: 120 , }}/>
      </Box>
    </>
    
  )
} 