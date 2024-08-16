import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import GlobalStyle from './GlobalStyle';
import ErrorBoundary from './components/ErrorBoundary';
import ParticleAnimation from './components/ParticleAnimation';
import MobileNavbar from './components/MobileNavbar';

function App() {

  return (
  <>
    <ErrorBoundary>
 <GlobalStyle />
 <CustomCursor />


  <Navbar/>
  <MobileNavbar/>
  <ParticleAnimation />
    <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/intro" element={<Intro />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/project" element={<Project />} />
 
      </Routes>
      </ErrorBoundary>
     
  </>
  );
}

export default App;
