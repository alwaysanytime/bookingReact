import {
  Box,
  Button,
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
import { useNavigate, Navigate } from "react-router-dom";
import { apis } from "../apis";
import PasswordField from "../components/PasswordField";
import { useAuth } from "../hooks/useAuth";

import { strings } from "../constants/strings";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { tokens, login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log("data------------------------>",data);
    try {
      const res = await apis.login(data);
       login(res.data.data.accessToken);
      console.log('response----------->',res.data.data.user);
       store.dispatch({ type: LOGIN_SUCCESS, payload: res.data.data.user });
      enqueueSnackbar({
        variant: "success",
        message: "You have logged in successfully.",
      });
      navigate("/dashboard");
    } catch (err) {
      store.dispatch({ type: LOGIN_FALIED });
      enqueueSnackbar({
        variant: "error",
        message: err.response?.data.message || strings.SERVER_ERROR,
      });
    }
  };

  if (tokens) return <Navigate to="/dashboard" />;

  return (
    <Box maxWidth={400} minWidth={400}>
      <Stack
        direction="column"
        spacing={3}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Welcome to Login!
        </Typography>
        <TextField
          variant="standard"
          label="Email"
          helperText={errors.email && errors.email.message}
          error={Boolean(errors.email)}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />

        <PasswordField
          variant="standard"
          label="Password"
          helperText={errors.password && errors.password.message}
          error={Boolean(errors.password)}
          register={register("password", {
            minLength: { value: 6, message: "At least 6 characters" },
            required: "Password required",
          })}
        />

        <Button variant="contained" type="submit">
          Login
        </Button>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="p">Don't have an account yet?</Typography>
          <Link href="/signup" fontWeight="bold">
            Sign Up
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginPage;
