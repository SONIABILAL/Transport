import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import OurServices from "./OurServices";
import CityTours from "./CityTours";
import Contact from "./Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/citytours" element={<CityTours />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingButton />

      <Footer />
    </BrowserRouter>
  );
};

export default App;
