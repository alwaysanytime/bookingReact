import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Taxes = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Taxes Page!</Typography>
    </Box>
  );
};

export default Taxes;
