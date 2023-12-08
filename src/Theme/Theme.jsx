import { createTheme } from "@mui/material";
import { Tokens } from "./Themesetup";
import React from "react";

// export const ColorContextMode=React.createContext({ToggleMode:()=>{}})
export const ColorContextMode = React.createContext({ ToggleMode: () => {} });

export const useMode = () => {
  const [mode, setmode] = React.useState("light");

  const ColorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      ToggleMode: () => {
        setmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(Tokens(mode)), [mode]);
  return [theme, ColorMode];
};
