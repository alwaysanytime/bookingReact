import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Prices = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Prices Page!</Typography>
    </Box>
  );
};

export default Prices;
