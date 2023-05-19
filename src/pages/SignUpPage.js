import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useSnackbar } from "notistack";
import { apis } from "../apis";
import PasswordField from "../components/PasswordField";
import { strings } from "../constants/strings";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data) => {
    try {
      const res = await apis.signup(data);
      enqueueSnackbar({
        variant: "success",
        message: res.data?.message,
      });
    } catch (err) {
      enqueueSnackbar({
        variant: "error",
        message: err.response?.data.message || strings.SERVER_ERROR,
      });
    }
  };
  return (
    <Box maxWidth={400} minWidth={400}>
      <Stack
        direction="column"
        spacing={2}
        onSubmit={handleSubmit(onSubmit)}
        component="form"
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Welcome to Sign Up!
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
        <TextField
          variant="standard"
          label="Username"
          type="text"
          error={Boolean(errors.username)}
          helperText={errors.username && errors.username.message}
          {...register("username", { required: "Username is required" })}
        />
        <PasswordField
          variant="standard"
          label="Password"
          error={Boolean(errors.password)}
          helperText={errors.password && errors.password.message}
          register={register("password", {
            required: true,
            minLength: { value: 6, message: "At least 6 characters" },
          })}
        />
        <PasswordField
          variant="standard"
          label="Confirm Password"
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword && errors.confirmPassword.message}
          register={register("confirmPassword", {
            required: "Confirm password is required",
            minLength: { value: 6, message: "At least 6 characters" },
            validate: (value) =>
              value === password.current ||
              "The confirm password does not match",
          })}
        />
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="p">Already have an account?</Typography>
          <Link href="/login" fontWeight="bold">
            Login
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SignUpPage;
