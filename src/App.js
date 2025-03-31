import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Hompage";
import AdminDashboard from "./pages/Admindashbroad";
// import AuthPage from "./pages/AuthPage";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminRoute from "./route/AdminRoute";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route element={<AdminRoute />}>
          <Route path="admin/dashboard" element={<AdminDashbroad />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
