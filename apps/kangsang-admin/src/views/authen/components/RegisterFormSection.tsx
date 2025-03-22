"use client";

import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, Resolver, useForm } from "react-hook-form";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Box,
} from "kangsang-mui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

// util
import {
  RegisterFormType,
  registerFormValidationSchema,
} from "../utils/registerForm";
import useMutateRegister from "../hooks/useMutateRegister";

function RegisterFormSection() {
  const [isHidePass, setIsHidePass] = useState(true);
  const [isHideConfirmPass, setIsHideConfirmPass] = useState(true);

  const resolver: Resolver<RegisterFormType> = yupResolver(
    registerFormValidationSchema()
  );

  const { handleSubmit, control, setValue } = useForm<RegisterFormType>({
    resolver,
  });

  const registerMutate = useMutateRegister({
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

  const onSubmitRegister = (data: RegisterFormType) => {
    registerMutate.mutate({
      email: data.email,
      password: data.password,
      displayName: data.email.split("@")[0] ?? "",
    });
  };

  return (
    <Box component="form" display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5" fontWeight="bold">
        Register
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
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            placeholder="confirm password"
            type={isHideConfirmPass ? "password" : "text"}
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
                      onClick={() => setIsHideConfirmPass((prev) => !prev)}
                      size="small"
                    >
                      <FontAwesomeIcon
                        icon={isHideConfirmPass ? faEyeSlash : faEye}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        onClick={handleSubmit(onSubmitRegister)}
      >
        <Typography variant="body1">Reay to new user!</Typography>
      </Button>
    </Box>
  );
}

export default RegisterFormSection;
