import { useState } from "react";
import HouseContent from "./data/HouseContent";
import HouseList from "./HouseList";

const Buy = () => {
  const [post, setPost] = useState(HouseContent);

  return (
    <div className="buy">
      <HouseList post={post} />
    </div>
  );
};

export default Buy;
