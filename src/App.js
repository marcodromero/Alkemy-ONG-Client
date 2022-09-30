import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/public/Home';
import New from "./routes/public/New"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
