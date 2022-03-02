import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { Link } from "react-router-dom";

const HouseSummary = ({ item }) => {
  return (
    <>
      <article>
        <div id="articles-img-container">
          <Link to={`/houseobject${item.id}`}>
            <img id="articles-img" src={item.image}></img>
          </Link>
          <p>
            <b>{item.city} </b>
            <br />
            {item.address}
            <br />
            {item.price}
            <br />
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
