import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Reviewspage = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Reviews Page!</Typography>
    </Box>
  );
};

export default Reviewspage;
