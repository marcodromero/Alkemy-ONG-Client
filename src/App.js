import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BackOffice from './routes/private/BackOffice';
import Home from './routes/public/Home';
import New from "./routes/public/New"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<New />} />
        <Route path='/back' element={<BackOffice />} />
      </Routes>
    </BrowserRouter>
  );
}
