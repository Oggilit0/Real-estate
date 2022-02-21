import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      Header
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/buy">Buy</Link>
      <Link to="/blogpost">Blog</Link>
      <Link to="contact">Contact</Link>
      <Link to="/services">Services</Link>
    </div>
  );
};
export default Header;
