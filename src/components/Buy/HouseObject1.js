import pic1 from "../Pictures/House/House1/House1-1.jpg";
import pic2 from "../Pictures/House/House1/House1-2.jpg";
import pic3 from "../Pictures/House/House1/House1-3.jpg";
import pic4 from "../Pictures/House/House1/House1-4.jpg";
import pic5 from "../Pictures/House/House1/House1-5.jpg";
import '../../stylesheets/HouseObject.css';

const HouseObject1 = () => {
  return (
    <div className="houseObjectContainer">
      <div className="factsTop">
        <hr className="line"></hr>
        <h2 className="title">Facts</h2>
        <hr className="line"></hr>
      </div>

      <div className="adressPrice">
        <div className="adress">Ödåkra 5</div>
        <div className="price">2000009 kr</div>
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
          Welcome to Ödåkra 5! <p />
          New opportunity, as we have another home in the area for sale, to
          acquire a well-equipped condominium on two floors in an attractive
          area. The home is bright and well-planned with a practical floor plan
          with hall, shower room with laundry area, kitchen and living room with
          open floor plan on the entrance level. The patio has a nice location
          facing south. On the upper level there is a living room with access to
          a balcony, three bedrooms and a bathroom. In the living room there is
          a hatch up to the attic. Heating is done with water-borne heat via
          exhaust air heat pump and there is access to both carport and charging
          box for the car. The home is located in a pleasant area with school,
          preschool, grocery store and with a short distance to city of
          Gothenburg.
        </h4>
      </div>
    </div>
  );
};
export default HouseObject1;
