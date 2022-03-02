import "../../stylesheets/TopImage.css";
import ReusableButton from "../ReusableComponents/ReusableButton";

const TopImage = () => {
  return (
    <div className="topImage">
      <div id="banner">
        <h1>Welcome home</h1>
        <div className="searchBar">
          <input type="text" placeholder="Search city or country"></input>
          <div id="reusable-button">
          <ReusableButton title="Search"></ReusableButton>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TopImage;
