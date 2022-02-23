import JSONDATA from "../mock-data.json";
import { useState } from "react";
import "../stylesheets/SearchBar.css";
import Buy from "./Buy";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          //return val;
        } else if (val.Address.includes(searchTerm)) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.Address}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBar;
