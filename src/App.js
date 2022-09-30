import { createTheme, ThemeProvider , colors} from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/public/Home";
import New from "./routes/public/New";
const theme = createTheme({
  palette: { 
    primary: {
      main: colors.grey[50]
    },
    secondary: {
      main: colors.blue[500]
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<New />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
