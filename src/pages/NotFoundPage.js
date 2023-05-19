import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { tokens } = useAuth();
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h5">404 Not Found Page</Typography>
      {tokens ? (
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Redirect to dashboard page
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Redirect to login page
        </Button>
      )}
    </Stack>
  );
};

export default NotFoundPage;
