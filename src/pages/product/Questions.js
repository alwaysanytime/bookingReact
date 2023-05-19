import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Questions = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Questions Page!</Typography>
    </Box>
  );
};

export default Questions;
