import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { MissionSnapshot } from "./components/sections/MissionSnapshot";
import { ImpactCounter } from "./components/sections/ImpactCounter";
import { ProgramGrid } from "./components/sections/ProgramGrid";
import { Roadmap } from "./components/sections/Roadmap";
import { SDGBar } from "./components/sections/SDGBar";
import { Governance } from "./components/sections/Governance";
import ScrollToTop from "./components/shared/ScrollToTop";

// Inner Pages
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import ProgramDetail from "./pages/ProgramDetail";

function Home() {
  return (
    <>
      <Hero />
      <MissionSnapshot />
      <ImpactCounter />
      <ProgramGrid />
      <Roadmap />
      <Governance />
      <SDGBar />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
