import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Availability = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Availability Page!</Typography>
    </Box>
  );
};

export default Availability;
