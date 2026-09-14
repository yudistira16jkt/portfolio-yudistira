import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollRevealObserver from "./components/ScrollRevealObserver";

import ProjectDetail from "./pages/ProjectDetail";
import CertificationsPage from "./pages/CertificationsPage";

import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <ScrollRevealObserver />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/project/:slug"
          element={<ProjectDetail />}
        />

        <Route
          path="/certifications"
          element={<CertificationsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;