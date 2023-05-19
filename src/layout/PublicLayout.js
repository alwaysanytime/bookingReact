import { Box } from "@mui/material";
import authBg from "../assets/img/auth.svg";

const PublicLayout = ({ children }) => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={10}
      padding={4}
    >
      <Box display="flex" alignContent="center" justifyContent="center">
        <img src={authBg} alt="auth-svg" width="100%"/>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default PublicLayout;
