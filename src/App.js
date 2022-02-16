import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Main />
          <RightColumn />
          <LeftColumn />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
