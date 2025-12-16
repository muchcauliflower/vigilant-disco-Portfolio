import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import TopBar from "./components/HardCoded/TopBar/TopBar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Respondr from "./respondr";

const BackgroundController: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      // Home page
      document.body.style.background = document.body.style.background =
        "url('/background/homepagebackground3.svg') center top / cover no-repeat #B3C4B4";
    } else {
      // Other pages
      document.body.style.background =
        "linear-gradient(to bottom, #171B18, #152521, #132F2A)";
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

const App: React.FC = () => {
  return (
    <Router>
      <BackgroundController />
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/respondr" element={<Respondr />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
