import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LeftColumn from "./components/ReusableComponents/LeftColumn";
import RightColumn from "./components/ReusableComponents/RightColumn";
import LandingPage from "./components/Home/LandingPage";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Buy from "./components/Buy/Buy";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import TopImage from "./components/TopImage/TopImage";
import BlogPost from "./components/Blog/BlogPost";
import ReusableButton from "./components/ReusableComponents/ReusableButton";
import HouseObject1 from "./components/Buy/HouseObject1";
import HouseObject2 from "./components/Buy/HouseObject2";
import HouseObject3 from "./components/Buy/HouseObject3";
import HouseObject4 from "./components/Buy/HouseObject4";
import HouseObject5 from "./components/Buy/HouseObject5";
import HouseObject6 from "./components/Buy/HouseObject6";
import HouseObject7 from "./components/Buy/HouseObject7";
import '../src/stylesheets/Main.css';
import '../src/stylesheets/GridContainer.css';

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
