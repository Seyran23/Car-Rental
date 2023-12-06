import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import TestimonialsPage from "./pages/TestimonialsPage";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Models from "./pages/Models";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
