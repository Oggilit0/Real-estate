import pic1 from "../Pictures/House/House3/House3-1.jpg";
import pic2 from "../Pictures/House/House3/House3-2.jpg";
import pic3 from "../Pictures/House/House3/House3-3.jpg";
import pic4 from "../Pictures/House/House3/House3-4.jpg";
import pic5 from "../Pictures/House/House3/House3-5.jpg";
import '../../stylesheets/HouseObject.css';

const HouseObject3 = () => {
  return (
    <div className="houseObjectContainer">
      <div className="factsTop">
        <hr className="line"></hr>
        <h2 className="title">Facts</h2>
        <hr className="line"></hr>
      </div>

      <div className="adressPrice">
        <div className="adress">Kungsgatan 3</div>
        <div className="price">400000 kr</div>
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
          Here is a place that will soon become vacant. The kitchen from
          Marbodal is clearly elegant, You see that the bathrooms are renovated
          if you are observant, That there is both district heating and wood
          stove is brilliant, right? The garage is large and interesting enough,
          You get a seat with an Saab AND a Trabant! Admittedly, the house costs
          a penny, But there is room to pledge, 300 meters to Gruvberget is
          relevant, Welcome to Kungsgatan 3 on an outer edge!
        </h4>
      </div>
    </div>
  );
};
export default HouseObject3;
