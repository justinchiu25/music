import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Player from './Component/Player';
import Sidebar from './Component/Sidebar';
import Homepage from './Component/Homepage';

export default function Routing() {
    return (
      <BrowserRouter>
        <Player />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }