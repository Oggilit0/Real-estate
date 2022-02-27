import { useState } from "react";
import HouseContent from "./data/HouseContent";
import HouseList from "./HouseList";
import { useEffect } from "react";

const Buy = () => {
  const [post, setPost] = useState(HouseContent);
  useEffect(() => {
    document.title = "Buy";
  }, []);

  return (
    <div>
      <hr className="line"></hr>
      <h2 className="title">Available objects for sale </h2>
      <hr className="line"></hr>

      <div id="articles-container">
        <HouseList post={post} />
      </div>
    </div>
  );
};

export default Buy;
