"use client";

import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, Resolver, useForm } from "react-hook-form";
import {
  Box,
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
import useMutateLogin from "../hooks/useMutateLogin";

function LoginFormSection() {
  const [isHidePass, setIsHidePass] = useState(true);

  const resolver: Resolver<LoginFormType> = yupResolver(
    loginFormValidationSchema()
  );

  const { handleSubmit, control, setValue } = useForm<LoginFormType>({
    resolver,
  });

  const loginMutate = useMutateLogin({
    onSuccess: () => {
      // dispatch(
      //   openSnackbar({
      //     open: true,
      //     title: "สำเร็จ",
      //     message: "ระบบได้ทำการบันทึกข้อมูลของท่านเรียบร้อยแล้ว",
      //     severity: "success",
      //   })
      // );
    },
    onError: () => {
      // dispatch(
      //   openSnackbar({
      //     open: true,
      //     title: "ไม่สำเร็จ",
      //     message: "ดำเนินการไม่สำเร็จกรุณาลองใหม่อีกครั้ง",
      //     severity: "error",
      //   })
      // );
    },
  });

  const onSubmitLogin = (data: LoginFormType) => {
    loginMutate.mutate({
      email: data.email,
      password: data.password,
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
        type="submit"
        variant="contained"
        onClick={handleSubmit(onSubmitLogin)}
      >
        <Typography variant="body1">Sign in</Typography>
      </Button>
    </Box>
  );
}

export default LoginFormSection;
