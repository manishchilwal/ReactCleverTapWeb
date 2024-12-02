import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DisplayPage from "./pages/DisplayPage";
import clevertap from "clevertap-web-sdk"; // Import CleverTap

function App() {
  useEffect(() => {
    // Initialize CleverTap only once
    clevertap.init("account token here"); // Replace with your Account ID
    // Optionally set user profile here
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
