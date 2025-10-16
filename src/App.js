import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { AuthProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./components/context/ProtectedRoute";

import Home from "./components/Landing/Home";
import About from "./components/Landing/About";
import Contact from "./components/Landing/Contact";

import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

import Dashboard from "./components/DashBoards/DashBoard";

const Navbar = () => (
  <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#1f1f38", color: "white" }}>
    <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "1.5rem" }}>E-Book</Link>
    <div>
      <Link to="/signin" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Login</Link>
      <Link to="/signup" style={{ color: "white", background: "#ff6e7f", padding: "0.5rem 1rem", borderRadius: "4px", textDecoration: "none" }}>Sign Up</Link>
    </div>
  </nav>
);
function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
