import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BeginnerYoga from "./pages/BeginnerYoga";
import DownwardDogTrainer from "./pages/DownwardDogTrainer";
import TreePoseTrainer from "./pages/TreePoseTrainer";

/* ✅ Wrapper to use location */
function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* ✅ Navbar ONLY on Home */}
      {location.pathname === "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beginner-yoga" element={<BeginnerYoga />} />
        <Route path="/downward-dog" element={<DownwardDogTrainer />} />
        <Route path="/tree-pose" element={<TreePoseTrainer />} />
      </Routes>
    </>
  );
}

/* ✅ Main App */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;