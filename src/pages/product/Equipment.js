import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Equipment = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Equipment Page!</Typography>
    </Box>
  );
};

export default Equipment;
