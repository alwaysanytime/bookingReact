import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Rental = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Rental Page!</Typography>
    </Box>
  );
};

export default Rental;
