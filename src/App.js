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
import BlogPost from "./components/BlogPost";
import ReusableButton from "./components/ReusableButton";
import HouseObject1 from "./components/HouseObject1";
import HouseObject2 from "./components/HouseObject2";
import HouseObject3 from "./components/HouseObject3";
import HouseObject4 from "./components/HouseObject4";
import HouseObject5 from "./components/HouseObject5";
import HouseObject6 from "./components/HouseObject6";
import HouseObject7 from "./components/HouseObject7";

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
            <Route path="/blogpost" element={<BlogPost />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="houseobject1" element={<HouseObject1 />} />
            <Route path="houseobject2" element={<HouseObject2 />} />
            <Route path="houseobject3" element={<HouseObject3 />} />
            <Route path="houseobject4" element={<HouseObject4 />} />
            <Route path="houseobject5" element={<HouseObject5 />} />
            <Route path="houseobject6" element={<HouseObject6 />} />
            <Route path="houseobject7" element={<HouseObject7 />} />
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
