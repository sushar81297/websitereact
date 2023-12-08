import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/View/Home";
import Detailview from "../Components/View/Detailview";
import Maps from "../Components/View/Maps";
import Login from "../Components/Login";
import Registor from "../Components/Registor";
import Logout from "../Components/Logout";
import Profile from "../Components/View/Profile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<Detailview />} />
        <Route path="/map/:latitude/:longitude" element={<Maps />} />
        <Route path="/map" element={<Maps />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registor" element={<Registor />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
