import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IThemeState {
  theme: "light" | "dark";
}

const initialState: IThemeState = {
  theme: "light",
};

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      const mode = action.payload ? "dark" : "light";
      if (state.theme !== mode) {
        state.theme = mode;
      }
    },
  },
});

export const { changeTheme } = themeModeSlice.actions;

export const themeModeSelector = (state: RootState) => state.themeMode;

export default themeModeSlice.reducer;
