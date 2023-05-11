import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { store } from "../redux/store";
import { LOGIN_FALIED, LOGIN_SUCCESS } from "../redux/actionTypes";
import { useNavigate } from "react-router-dom";
import { apis } from "../apis";

const tempUserId = "codechef";
const tempPassword = "123123";

const LoginPage = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      // const res = await apis.login(data);
      // store.dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });

      if (data.userId === tempUserId && data.password === tempPassword) {
        enqueueSnackbar({
          variant: "success",
          message: "You have logged in successfully.",
        });
        store.dispatch({ type: LOGIN_SUCCESS, payload: {} });
        navigate("/dashboard");
      } else {
        enqueueSnackbar({
          variant: "error",
          message: "Invalid credentials.",
        });
      }
    } catch (err) {
      store.dispatch({ type: LOGIN_FALIED });
      enqueueSnackbar({
        variant: "error",
        message: err.message,
      });
    }
  };

  return (
    <Box maxWidth={400} minWidth={400}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={3}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Welcome to Login!
          </Typography>
          <Card sx={{bgcolor: theme.palette.warning.light}}>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="p">
                  Temp UserId: <strong>{tempUserId}</strong>
                </Typography>
                <Typography variant="p">
                  Temp password: <strong>{tempPassword}</strong>
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <TextField
            variant="standard"
            label="User ID"
            type="text"
            helperText="At least 6 characters"
            error={errors.userId !== undefined}
            {...register("userId", { minLength: 6, required: true })}
          />

          <TextField
            variant="standard"
            label="Password"
            type="password"
            helperText="At least 6 characters"
            error={errors.password !== undefined}
            {...register("password", { minLength: 6, required: true })}
          />

          <Button variant="contained" type="submit">
            Login
          </Button>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="p">Don't have an account yet?</Typography>
            <Link href="/signup" fontWeight="bold">Sign Up</Link>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;