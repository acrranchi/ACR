import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import News from "./pages/News.jsx"; // Added missing import

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutUs />} /> {/* Fixed typo */}
      <Route path="/services" element={<Services />} />
      <Route path="/news" element={<News />} />
    </Routes>
  </BrowserRouter>
);