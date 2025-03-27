"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IconButton, Tooltip } from "kangsang-mui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { changeTheme } from "@/redux/theme";
import { setThemeStorage } from "@/utils/storage";

function ThemeControl() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.themeMode);

  if (themeMode.theme === "light") {
    return (
      <Tooltip title={"Dark mode"} arrow>
        <IconButton
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
          }}
          onClick={() => {
            setThemeStorage("dark");
            dispatch(changeTheme(true));
          }}
        >
          <FontAwesomeIcon icon={faMoon} />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={"Light mode"} arrow>
      <IconButton
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
        }}
        onClick={() => {
          setThemeStorage("light");
          dispatch(changeTheme(false));
        }}
      >
        <FontAwesomeIcon icon={faSun} />
      </IconButton>
    </Tooltip>
  );
}

export default ThemeControl;
