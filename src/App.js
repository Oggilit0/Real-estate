import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Blog from "./components/Blog";
import Buy from "./components/Buy";
import Contact from "./components/Contact";
import Services from "./components/Services";
import TopImage from "./components/TopImage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <TopImage />
        <div className="main" id="main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        <RightColumn />
        <LeftColumn />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
