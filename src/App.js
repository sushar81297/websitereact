import React, { useEffect } from "react";
import Header from "./Components/Layout/Header";
import SecondHeader from "./Components/Layout/SecondHeader";
import Footer from "./Components/Layout/Footer";
import Router from "./Routes/Router";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ColorContextMode, useMode } from "./Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "./feature/counter/userSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  const [theme, colorMode] = useMode();
  return (
    // <ColorContextMode.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* <SecondHeader /> */}
      <Router />
      <Footer />
    </ThemeProvider>
    // </ColorContextMode.Provider>
  );
}

export default App;
