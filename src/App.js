import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Main from "./components/Main";
import About from "./components/About";
import BlogPost from "./components/BlogPost";
import Buy from "./components/Buy";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="main" id="tempDesign">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogpost" element={<BlogPost />} />
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
