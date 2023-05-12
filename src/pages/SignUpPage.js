import {
  Box,
  Button,
  Link,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { _office, _companies, _team } from "../constants";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useSnackbar } from "notistack";
import { apis } from "../apis";

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
    console.log(data);
    try {
      const res = await apis.signup(data);
      console.log('register->',res);
      enqueueSnackbar({
        variant: "success",
        message: "You have registerd successfully, Please wait for validation.",
      });
    } catch (err) {
      console.log(err);
      enqueueSnackbar({
        variant: "error",
        message: err.response.data.message,
      });
    }
  };
  return (
    <Box maxWidth={400} minWidth={400}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Welcome to Sign Up!
          </Typography>
          <TextField
            variant="standard"
            label="Email"
            type="text"
            helperText="At least 6 characters"
            error={errors.email !== undefined}
            {...register("email", { required: true, minLength: 6 })}
          />
          <TextField
            variant="standard"
            label="Username"
            type="text"
            error={errors.username !== undefined}
            {...register("username", { required: true })}
          />
          <TextField
            variant="standard"
            label="Password"
            type="password"
            error={errors.password !== undefined}
            helperText="At least 6 characters"
            {...register("password", { required: true, minLength: 6 })}
          />
          <TextField
            variant="standard"
            label="Confirm Password"
            error={errors.confirmPassword !== undefined}
            type="password"
            helperText={
              errors.confirmPassword
                ? errors.confirmPassword.type === "required" ||
                  errors.confirmPassword.type === "minLength"
                  ? "At least 6 characters"
                  : errors.confirmPassword.message
                : "At least 6 characters"
            }
            {...register("confirmPassword", {
              required: true,
              minLength: 6,
              validate: (value) =>
                value === password.current ||
                "The confirm password does not match",
            })}
          />
          <TextField
            select
            variant="standard"
            type="text"
            defaultValue={_companies[0].value}
            label="Company"
            {...register("company")}
          >
            {_companies.map((option, index) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            variant="standard"
            type="text"
            defaultValue={_office[3].value}
            label="Office"
            {...register("office")}
          >
            {_office.map((option, index) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            variant="standard"
            type="text"
            defaultValue={_team[0].value}
            label="Team"
            {...register("team")}
          >
            {_team.map((option, index) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
      </form>
    </Box>
  );
};

export default SignUpPage;
