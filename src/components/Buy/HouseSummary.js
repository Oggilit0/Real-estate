import { isContentEditable } from "@testing-library/user-event/dist/utils";
import HouseObject1 from "./HouseObject1";
import HouseObject2 from "./HouseObject2";
import { Link } from "react-router-dom";

const HouseSummary = ({ item }) => {
  return (
    <>
      <article>
        <div id="articles-img-container">
          <img id="articles-img" src={item.image}></img>
          <p>
            {item.city}
            <br />
            {item.address}
            <br />
            {item.price}
            <p />
            {item.sqMeters}
            <br />
            {item.amountRooms}
            <br />
            {item.type}
            <p />
            <Link to={`/houseobject${item.id}`}>Find out more..</Link>
          </p>
        </div>
      </article>
    </>
  );
};

export default HouseSummary;
