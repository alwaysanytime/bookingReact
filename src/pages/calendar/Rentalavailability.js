import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Rentalavailability = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Rental availability Page!</Typography>
    </Box>
  );
};

export default Rentalavailability;
