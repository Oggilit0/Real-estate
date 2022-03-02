import "../../stylesheets/TopImage.css";
import ReusableButton from "../ReusableComponents/ReusableButton";

const TopImage = () => {
  return (
    <div className="topImage" id="tempDesign">
      <div id="banner">
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
