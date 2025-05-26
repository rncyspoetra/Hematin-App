import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Questions from "./pages/Questions";
import Overview from "./pages/Overview";
import AOS from "aos";
import "aos/dist/aos.css";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/question" element={<Questions />} />
            <Route path="/question/overview" element={<Overview />} />
            <Route path="/result/:id" element={<Result />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
