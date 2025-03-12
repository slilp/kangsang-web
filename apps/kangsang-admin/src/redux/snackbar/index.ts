import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SnackbarState {
  open: boolean;
  message: string;
  title?: string;
  severity: "success" | "error" | "warning" | "info";
}

const initialState: SnackbarState = {
  open: false,
  message: "",
  title: "",
  severity: "error",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (state, action: PayloadAction<SnackbarState>) => {
      state.open = true;
      state.message = action.payload.message;
      state.title = action.payload.title;
      state.severity = action.payload.severity;
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
