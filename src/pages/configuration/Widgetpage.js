import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Widgetpage = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Widgets Page!</Typography>
    </Box>
  );
};

export default Widgetpage;
