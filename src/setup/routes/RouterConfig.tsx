import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../../pages/Profile/Profile";
import Missing from "../../pages/Missing/Missing";
import Dashboard from "../../pages/Dashboard/Dashboard";
import UnAuthorized from "../../pages/UnAuthorized/UnAuthorized";
import Login from "../../pages/Auth/Login";

type Props = {};

export const ROLES = {
  USER: "0",
  ADMIN: "1",
};

const RouterConfig = (props: Props) => {
  return (
    <Routes>
      {/* Add layout */}
      {/* Add error, loading */}

      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="unauthorized" element={<UnAuthorized />} />
      <Route path="/login" element={<Login />} />

      {/* For user */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.USER]} />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      {/* For Admin */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      {/* Catch all */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default RouterConfig;
