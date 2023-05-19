import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Tickets = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Tickets Page!</Typography>
    </Box>
  );
};

export default Tickets;
