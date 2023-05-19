import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Emailpage = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Email Page!</Typography>
    </Box>
  );
};

export default Emailpage;
