import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Cartspage = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Advanced Carts Page!</Typography>
    </Box>
  );
};

export default Cartspage;
