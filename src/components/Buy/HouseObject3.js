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
        <hr className="factsLine"></hr>
      </div>

      <div className="typeRooms">
        <div className="adress">House</div>
        <div className="price">2</div>
        <hr className="factsLine"></hr>
      </div>

      <div className="pictures-bar">
        <hr className="line"></hr>
        <h2 className="title">Pictures</h2>
        <hr className="line"></hr>
      </div>

      <article className="landing-section" id="img-collage-house">
      <section className="landing-section" id="img-container">
        <img id="img1" src={pic1} />
      </section>

      <section className="landing-section" id="medium-img-container">
        <img id="medium-img-house" src={pic4} />
      </section>
      <section className="landing-section" id="broad-img-container">
        <img id="broad-img-house" src={pic2} />
      </section>
    </article>

      <div className="description-bar">
        <hr className="line"></hr>
        <h2 className="title">Information</h2>
        <hr className="line"></hr>
        <p id = "houseText">
          Here is a place that will soon become vacant. <br/>The kitchen from
          Marbodal is clearly elegant, You see that the bathrooms are renovated
          if you are observant, That there is both district heating and wood
          stove is brilliant, right? <br/>The garage is large and interesting enough,
          You get a seat with an Saab AND a Trabant! Admittedly, the house costs
          a penny, But there is room to pledge, 300 meters to Gruvberget is
          relevant. <br/> Welcome to Kungsgatan 3 on an outer edge!
        </p>
      </div>
    </div>
  );
};
export default HouseObject3;
