import { createTheme, ThemeProvider , colors} from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/public/Home";
import New from "./routes/public/New";
import Layout from './components/Layout'
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
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
          </Route>
          <Route path="/news" element={<Layout />}>
            <Route index element={<New/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
