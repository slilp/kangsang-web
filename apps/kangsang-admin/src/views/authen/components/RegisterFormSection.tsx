"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, Resolver, useForm } from "react-hook-form";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from "kangsang-mui";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

// util
import {
  RegisterFormType,
  registerFormValidationSchema,
} from "../utils/registerForm";
import useMutateRegister from "../hooks/useMutateRegister";
import { useAppDispatch } from "@/redux/hook";
import { openSnackbar } from "@/redux/snackbar";

function RegisterFormSection() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isHidePass, setIsHidePass] = useState(true);
  const [isHideConfirmPass, setIsHideConfirmPass] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const resolver: Resolver<RegisterFormType> = zodResolver(
    registerFormValidationSchema
  );

  const { handleSubmit, control, setValue } = useForm<RegisterFormType>({
    resolver,
  });

  const registerMutate = useMutateRegister({
    onSuccess: () => {
      setIsLoading(false);
      dispatch(
        openSnackbar({
          open: true,
          message: "Welcome our new member ! You have successfully registered",
          severity: "success",
        })
      );
      router.push("/login");
    },
    onError: () => {
      setIsLoading(false);
      dispatch(
        openSnackbar({
          open: true,
          message: "Failed to register, please try again",
          severity: "error",
        })
      );
    },
  });

  const onSubmitRegister = (data: RegisterFormType) => {
    setIsLoading(true);
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
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            data-testid="confirm-password-input"
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
                      data-testid="open-confirm-password-btn"
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
        data-testid="register-btn"
        type="submit"
        variant="contained"
        onClick={handleSubmit(onSubmitRegister)}
        disabled={isLoading}
      >
        <Typography variant="body1">
          {isLoading ? <CircularProgress size="20px" /> : "Reay to new user!"}
        </Typography>
      </Button>
    </Box>
  );
}

export default RegisterFormSection;
