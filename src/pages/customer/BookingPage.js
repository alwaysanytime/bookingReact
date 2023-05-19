import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const BookingPage = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Booking Page!</Typography>
    </Box>
  );
};

export default BookingPage;
