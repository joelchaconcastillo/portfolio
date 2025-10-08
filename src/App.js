import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ Vendor CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'glightbox/dist/css/glightbox.css';

// ✅ Your main app styles
import './App.css';

// ✅ Hooks
import useAOS from './hooks/useAOS';
import useGlightbox from './hooks/useGlightbox';
import useMobileNav from './hooks/useMobileNav';
import useScrollBody from './hooks/useScrollBody';
import useScrollTop from './hooks/useScrollTop';
import useSwiper from './hooks/useSwiper';

// ✅ Pages
import Home from './pages/starter-page';
import About from './pages/about';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import PortfolioDetails from './pages/portfolio-details';
import Resume from './pages/resume';
import Contact from './pages/contact';

function App() {
  // Initialize all global JS plugins via hooks
  useAOS({ duration: 1000, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
