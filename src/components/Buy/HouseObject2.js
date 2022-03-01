import pic1 from "../Pictures/House/House2/House2-1.jpg";
import pic2 from "../Pictures/House/House2/House2-2.jpg";
import pic3 from "../Pictures/House/House2/House2-3.jpg";
import pic4 from "../Pictures/House/House2/House2-4.jpg";
import pic5 from "../Pictures/House/House2/House2-5.jpg";

const HouseObject2 = () => {
  return (
    <div className="houseObjectContainer">
      <div className="factsTop">
        <hr className="line"></hr>
        <h2 className="title">Facts</h2>
        <hr className="line"></hr>
      </div>

      <div className="adressPrice">
        <div className="adress">Main street 5</div>
        <div className="price">3000000 kr</div>
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
          Two-storey villa with basement, located in a popular residential area
          with a spacious plot of about 80 sqm. From the house you can easily
          reach Kinna center, school / care and bus stop. The standard is new
          and fresh and in no need of renovation, which gives new owners the
          opportunity to have a piece of mind. Detached garage building and
          storage shed on the plot. The house has been inspected and minutes are
          available on the broker's website under the tab "documents and links".
          The property is sold with a disclaimer against any. hidden errors due
          to estate sales. Welcome with your registration for the show.
        </h4>
      </div>
    </div>
  );
};
export default HouseObject2;
