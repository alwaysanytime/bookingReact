import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

const PasswordField = ({
  sx,
  label,
  helperText,
  error,
  variant,
  register,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={sx} variant={variant} error={error}>
      <InputLabel>{label}</InputLabel>
      <Input
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        {...register}
        {...props}
      />
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default PasswordField;
