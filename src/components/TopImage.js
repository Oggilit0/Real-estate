import SearchBar from "./SearchBar";
import ListViewings from "./ListViewings.js";

const TopImage = () => {
  return (
    <div className="topImage" id="tempDesign">
      <div id="banner">
        <SearchBar />
        <ListViewings name="Summerview" />
      </div>
    </div>
  );
};

export default TopImage;
