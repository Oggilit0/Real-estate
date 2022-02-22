import Logo from "./Pictures/logga.png";
import "../stylesheets/TopImage.css"
import BlogImage from "./Pictures/blogImage.jpg";

const TopImage = () => {
  return (
    <div className="topImage" id="tempDesign">
      <img src={Logo} width="100px" />
      <img id="blogImage" src={BlogImage}/>
      <h2>Image</h2>
    </div>
  );
};

export default TopImage;
