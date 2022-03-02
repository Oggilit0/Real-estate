import logga from "../Pictures/logga.png";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import '../../stylesheets/Header.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><img id="header-logo" src={logga} /></Link>
      <NavigationBar />
    </div>
  );
};
export default Header;
