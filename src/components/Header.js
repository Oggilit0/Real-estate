import { Link } from "react-router-dom";
import logga from "./Pictures/logga.png";

const Header = () => {
  return (
    <div className="header">
      <img id="header-logo" src={logga} />
      <nav id="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/buy">Buy</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
