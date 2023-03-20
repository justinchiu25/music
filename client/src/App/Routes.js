import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './Component/Homepage';

export default function Routing() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/">
            <Route index element={<Homepage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    )
  }