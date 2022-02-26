import { isContentEditable } from "@testing-library/user-event/dist/utils";

const HouseSummary = ({ item }) => {
  return (
    <>
      <article>
        <div id="articles-img-container" style={{ color: "white" }}>
          <img id="articles-img" src={item.image}></img>
          <p>
            {item.city}
            <br />
            {item.address}
            <br />
            {item.price}
            <br />
            {item.sqMeters}

            {item.amountRooms}

            {item.type}
          </p>
        </div>
      </article>
    </>
  );
};

export default HouseSummary;
