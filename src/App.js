import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'aos/dist/aos.css';
import 'swiper/css';
import 'glightbox/dist/css/glightbox.css';

//import './App.css';

import useAOS from './hooks/useAOS';
import useGlightbox from './hooks/useGlightbox';
import useMobileNav from './hooks/useMobileNav';
import useScrollBody from './hooks/useScrollBody';
import useScrollTop from './hooks/useScrollTop';
import useSwiper from './hooks/useSwiper';

import Home from './pages/starter-page';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Work from './pages/work';
import Research from './pages/research';
import Achievements from './pages/achievements';
import Layout from './components/Layout';
//import PortfolioDetails from './components/pages/portfolio-details';
import Resume from './pages/resume';
//import Resume from './components/pages/resume';
//import Services from './components/pages/services';


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
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/research" element={<Research/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/achievements" element={<Achievements/>}/>
          {
            //          <Route path="/contact" element={<Contact />} />
            //<Route path="/services" element={<Services />} />
            //<Route path="/portfolio-details" element={<PortfolioDetails />} />
            //<Route path="/resume" element={<Resume />} />
          }
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
