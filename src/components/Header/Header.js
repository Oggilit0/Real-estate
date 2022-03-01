import logga from "../Pictures/logga.png";
import NavigationBar from "./NavigationBar";
import '../../stylesheets/Header.css';

const Header = () => {
  return (
    <div className="header">
      <img id="header-logo" src={logga} />
      <NavigationBar />
    </div>
  );
};
export default Header;
