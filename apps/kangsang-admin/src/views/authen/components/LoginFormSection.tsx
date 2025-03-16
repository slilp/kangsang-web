"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, Resolver, useForm } from "react-hook-form";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "kangsang-mui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

// util
import { LoginFormType, loginFormValidationSchema } from "../utils/loginForm";

function LoginFormSection() {
  const [isHidePass, setIsHidePass] = useState(true);

  const resolver: Resolver<LoginFormType> = yupResolver(
    loginFormValidationSchema()
  );

  const { handleSubmit, control, setValue } = useForm<LoginFormType>({
    resolver,
  });
  const onSubmitLogin = (data: LoginFormType) => {
    console.log(data);
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Login
      </Typography>
      <Typography variant="body1">Welcome to Admin Dashboard</Typography>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            placeholder="email"
            value={value}
            helperText={error?.message}
            error={!!error?.message}
            onChange={(e) => onChange(e.target.value.toLowerCase())}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            placeholder="password"
            type={isHidePass ? "password" : "text"}
            helperText={error?.message}
            error={!!error?.message}
            onChange={(e) => onChange(e.target.value.toLowerCase())}
            sx={{
              "& .MuiOutlinedInput-root": {
                paddingRight: "4px",
              },
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={() => setIsHidePass((prev) => !prev)}
                      size="small"
                    >
                      <FontAwesomeIcon icon={isHidePass ? faEyeSlash : faEye} />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      />
      <Link
        href="/forgot-password"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <Typography
          variant="body2"
          textAlign="right"
          sx={{ "&:hover": { opacity: 0.7 } }}
        >
          Forgot password ?
        </Typography>
      </Link>
      <Button variant="contained" onClick={handleSubmit(onSubmitLogin)}>
        <Typography variant="body1">Sign in</Typography>
      </Button>
    </>
  );
}

export default LoginFormSection;
