import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const SearchPage = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Search Page!</Typography>
    </Box>
  );
};

export default SearchPage;
