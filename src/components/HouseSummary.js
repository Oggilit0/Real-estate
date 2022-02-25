import { isContentEditable } from "@testing-library/user-event/dist/utils";

const HouseSummary = ({ item }) => {
  return (
    <div id="houseSummary">
      <h1 id="houseCity">{item.city}</h1>
      <p id="houseAddress">{item.address}</p>
      <div id="housePrice">{item.price}</div>
      <div id="houseSq">{item.sqMeters}</div>
      <div id="amountRooms">{item.amountRooms}</div>
      <div id="type">{item.type}</div>
      <div id="description">{item.description}</div>
      <img id="blogImage" src={item.image} />
    </div>
  );
};

export default HouseSummary;
