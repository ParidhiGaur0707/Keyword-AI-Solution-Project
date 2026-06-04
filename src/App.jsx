import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import DigitalMarketing from "./pages/DigitalMarketing.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;