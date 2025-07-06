"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, Resolver, useForm } from "react-hook-form";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "kangsang-mui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "@/redux/hook";

// util
import { LoginFormType, loginFormValidationSchema } from "../utils/loginForm";
import { openSnackbar } from "@/redux/snackbar";

function LoginFormSection() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isHidePass, setIsHidePass] = useState(true);
  const [isSinging, setIsSiging] = useState(false);

  const resolver: Resolver<LoginFormType> = zodResolver(
    loginFormValidationSchema
  );

  const { handleSubmit, control } = useForm<LoginFormType>({
    resolver,
  });

  const onSubmitLogin = (data: LoginFormType) => {
    setIsSiging(true);
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        router.push("/");
      } else {
        dispatch(
          openSnackbar({
            open: true,
            message: "Invalid email or password",
            severity: "error",
          })
        );
        setIsSiging(false);
      }
    });
  };

  return (
    <Box component="form" display="flex" flexDirection="column" gap={2}>
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
            data-testid="email-input"
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
            data-testid="password-input"
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
                      data-testid="open-password-btn"
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
      {/* <Link
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
      </Link> */}
      <Button
        data-testid="signin-btn"
        type="submit"
        variant="contained"
        onClick={handleSubmit(onSubmitLogin)}
        disabled={isSinging}
      >
        <Typography variant="body1">
          {isSinging ? <CircularProgress size="20px" /> : "Sign in"}
        </Typography>
      </Button>
    </Box>
  );
}

export default LoginFormSection;
