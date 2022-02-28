
import logga from "../Pictures/logga.png";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <div className="header">
      <img id="header-logo" src={logga} />
      <NavigationBar />
    </div>
  );
};
export default Header;
