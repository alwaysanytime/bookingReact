import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Rentalbookings = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Rental Bookings Page!</Typography>
    </Box>
  );
};

export default Rentalbookings;
