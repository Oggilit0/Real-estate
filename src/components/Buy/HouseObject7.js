import pic1 from "../Pictures/House/House7/House7-1.jpg";
import pic2 from "../Pictures/House/House7/House7-2.jpg";
import pic3 from "../Pictures/House/House7/House7-3.jpg";
import pic4 from "../Pictures/House/House7/House7-4.jpg";
import pic5 from "../Pictures/House/House7/House7-5.jpg";

const HouseObject7 = () => {
  return (
    <div className="houseObjectContainer">
      <div className="factsTop">
        <hr className="line"></hr>
        <h2 className="title">Facts</h2>
        <hr className="line"></hr>
      </div>

      <div className="adressPrice">
        <div className="adress">Strandvägen 5</div>
        <div className="price">50000000kr</div>
      </div>

      <div className="pictures-bar">
        <hr className="line"></hr>
      </div>

      <div className="display">
        <img src={pic1} className="image" />
        <img src={pic2} className="image" />

        <img src={pic3} className="image" />
        <img src={pic4} className="image" />

        <img src={pic5} className="image" />
      </div>

      <div className="description-bar">
        <hr className="line"></hr>
        <h4>
          Charming and well-planned house with a sunny, lush corner plot in a
          leafy quiet location in Djursholm out side of Stockholm. Welcoming
          hall opens up to the bright living room. Here is a nice white
          fireplace, oak parquet and large windows as well as access to a lovely
          terrace with a sunny location. Spacious kitchen with large nice
          windows and dining area. Several bedrooms with the possibility of more
          if needed. Furnished basement with living room, laundry room, toilet,
          sauna and storage space. Garage, carport and guest house with sleeping
          facilities
        </h4>
      </div>
    </div>
  );
};
export default HouseObject7;
