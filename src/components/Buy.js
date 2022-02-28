import { useState } from "react";
import HouseContent from "./data/HouseContent";
import HouseList from "./HouseList";
import { useEffect } from "react";
import Inspirational from "./Inspirational";

const Buy = () => {
  const [post, setPost] = useState(HouseContent);
  useEffect(() => {
    document.title = "Buy";
  }, []);

  return (
    <div>
      <div className="buy-top">
        <hr className="line"></hr>
        <h2 className="title">Available objects for sale </h2>
        <hr className="line"></hr>
      </div>

      <div id="articles-container">
        <HouseList post={post} />
      </div>
      <div>
        <Inspirational />
      </div>
      <p />
      <div id="articles-container">
        <HouseList post={post} />
      </div>
    </div>
  );
};

export default Buy;
