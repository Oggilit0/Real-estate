import pic1 from "../Pictures/House/House3/House3-1.jpg";
import pic2 from "../Pictures/House/House3/House3-2.jpg";
import pic3 from "../Pictures/House/House3/House3-3.jpg";
import pic4 from "../Pictures/House/House3/House3-4.jpg";
import pic5 from "../Pictures/House/House3/House3-5.jpg";
import "../../stylesheets/HouseObject.css";
import Viewing from "../ReusableComponents/Viewing";
import { useEffect } from "react";

const HouseObject3 = () => {
  useEffect(() => {
    document.getElementById("banner").style.backgroundImage = `url(${pic2})`;
  }, []);

  return (
    <div className="houseObjectContainer">
      <Viewing date={"24 jun"} />
      <div id="obj-information">
          <div id="adress"><h1>Kungsgatan 3</h1></div>
          <div id="price"> <h2>4 000 000 kr</h2></div>
          <p>Type: House</p>
          <p>Rooms: 6</p>
      </div>

      <div id="obj-collage">
      <article className="collage-design" id="img-collage-house">
        <section className="collage-design" id="img-container">
          <img id="img1" src={pic2} />
        </section>

        <section className="collage-design" id="medium-img-container">
          <img id="medium-img-house" src={pic3} />
        </section>
        <section className="collage-design" id="broad-img-container">
          <img id="broad-img-house" src={pic4} />
        </section>
      </article>
      </div>

      

      <div id="description-bar">
        <hr className="line"></hr>
        <h2 className="title">Information</h2>
        <hr className="line"></hr>

         <p id="houseText">
          Here is a place that will soon become vacant. <br/><br/>The kitchen from
          Marbodal is clearly elegant, You see that the bathrooms are renovated
          if you are observant, That there is both district heating and wood
          stove is brilliant, right? <br/><br/>The garage is large and interesting enough,
          You get a seat with an Saab AND a Trabant! Admittedly, the house costs
          a penny, But there is room to pledge, 300 meters to Gruvberget is
          relevant. <br/> Welcome to Kungsgatan 3 on an outer edge!
        </p>
      </div>
    </div>
  );
};

export default HouseObject3;

