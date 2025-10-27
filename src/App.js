import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import CareerQuiz from "./pages/CarrerQuiz/CarrerQuiz";
// import CareerSimulation from "./pages/CareerSimulation/CareerSimulation";
import PeerMatching from "./pages/PeerMatching/PeerMatching";
import AIMentor from "./pages/AIMentor/AIMentor";
import PolicyInsights from "./pages/PolicyInsights/PolicyInsights";

import "./styles/main.scss";
import "./App.scss";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Navbar onOpenModal={() => setShowModal(true)} />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onOpenModal={() => setShowModal(true)} />
                <Features />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/career-quiz" element={<CareerQuiz />} />
          {/* <Route path="/career-simulation" element={<CareerSimulation />} /> */}
          <Route path="/peer-matching" element={<PeerMatching />} />
          <Route path="/ai-mentor" element={<AIMentor />} />
          <Route path="/policy-insights" element={<PolicyInsights />} />
        </Routes>
      </main>
      <Footer />
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </Router>
  );
}

export default App;
