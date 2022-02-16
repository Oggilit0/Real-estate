import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <RightColumn />
      <LeftColumn />
      <Footer />
    </div>
  );
}

export default App;
