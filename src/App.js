import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Main from "./components/Main";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<About />} />
        </Routes>

        <RightColumn />
        <LeftColumn />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
