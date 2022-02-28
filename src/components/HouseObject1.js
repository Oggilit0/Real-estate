import pic1 from "./Pictures/House/House1/House1-1.jpg";
import pic2 from "./Pictures/House/House1/House1-2.jpg";
import pic3 from "./Pictures/House/House1/House1-3.jpg";
import pic4 from "./Pictures/House/House1/House1-4.jpg";
import pic5 from "./Pictures/House/House1/House1-5.jpg";

const HouseObject1 = () => {
  return (
    <div className="houseobject">
      <div className="factsTop">
        <hr className="line"></hr>
        <h2 className="title">Facts</h2>
        <hr className="line"></hr>
      </div>

      <div className="adressPrice">
        <div className="adress">Vasaplatsen 5</div>
        <div className="price">2000009kr</div>
      </div>

      <div className="pictures-bar">
        <hr className="line"></hr>
      </div>

      <div className="display">
        <img src={pic1} className="image" />
        <img src={pic2} className="image" />
      </div>

      <div className="display2">
        <img src={pic3} className="image" />
        <img src={pic4} className="image" />
      </div>

      <div className="display3">
        <img src={pic5} className="image" />
      </div>
    </div>
  );
};
export default HouseObject1;
