import { useState } from "react";
import HouseContent from "../data/HouseContent";
import HouseList from "./HouseList";
import { useEffect } from "react";
import Inspirational from "../ReusableComponents/Inspirational";
import img from "../Pictures/bg-image.jpg";
import '../../stylesheets/Buy.css';

const Buy = () => {
  const [post, setPost] = useState(HouseContent);

  useEffect(() => {

    document.title = "Buy";
    document.getElementById("banner").style.backgroundImage = `url(${img})`;
  }, []);

  return (
    <div>
      <hr className="line"></hr>
      <h2 className="title">Available objects for sale </h2>
      <hr className="line"></hr>

      <div id="houselist-container">
        <HouseList post={post} />
      </div>
      <div>
        <Inspirational />
      </div>
      <p />
      <div id="houselist-container">
        <HouseList post={post} />
      </div>
    </div>
  );
};

export default Buy;
