import Logo from "./Pictures/logga.png";
import "../stylesheets/TopImage.css"

const TopImage = () => {
  return (
    <div className="topImage" id="tempDesign">
      <img src={Logo} width="100px" />
      <h2>Image</h2>
    </div>
  );
};

export default TopImage;
