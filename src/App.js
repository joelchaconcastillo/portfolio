import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "aos/dist/aos.css";
import "swiper/css";
import "glightbox/dist/css/glightbox.css";

import useAOS from "./hooks/useAOS";
import useGlightbox from "./hooks/useGlightbox";
import useMobileNav from "./hooks/useMobileNav";
import useScrollBody from "./hooks/useScrollBody";
import useScrollTop from "./hooks/useScrollTop";
import useSwiper from "./hooks/useSwiper";

import Home from "./pages/starter-page";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Work from "./pages/work";
import Research from "./pages/research";
import Achievements from "./pages/achievements";
import Layout from "./components/Layout";
import Resume from "./pages/resume";
import ProjectsPage from "./pages/projects";

function App() {
  // Initialize all global JS plugins via hooks
  useAOS({ duration: 1000, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  // ✅ Wake up backend on page load
  useEffect(() => {
    const wakeUpBackend = async () => {
      try {
        await fetch("/"); // This hits the backend root through the vercel proxy
        console.log("Backend wake-up ping sent ✅");
      } catch (err) {
        console.warn("Backend wake-up failed ⚠️", err);
      }
    };
    wakeUpBackend();
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/achievements" element={<Achievements />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
