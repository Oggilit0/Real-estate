import SearchBar from "./SearchBar";
import ListViewings from "../Buy/ListViewings.js";

const TopImage = () => {
  return (
    <div className="topImage" id="tempDesign">
      <div id="banner">
        <div className="searchBar">
          <SearchBar className="input" />
          <ListViewings name="Summerview" />
        </div>
      </div>
    </div>
  );
};

export default TopImage;