import pic1 from "../Pictures/House/House1/House1-1.jpg";
import pic2 from "../Pictures/House/House1/House1-2.jpg";
import pic3 from "../Pictures/House/House1/House1-3.jpg";
import pic4 from "../Pictures/House/House1/House1-4.jpg";
import pic5 from "../Pictures/House/House1/House1-5.jpg";
import Viewing from "../ReusableComponents/Viewing";
import '../../stylesheets/HouseObject.css';
import { useEffect } from "react";

const HouseObject1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("banner").style.backgroundImage = `url(${pic1})`;
  }, []);

  return (
    <div className="houseObjectContainer">
      <Viewing date={"2 aug"} />
      <div id="obj-information">
          <div id="adress"><h1>Ödåkra 5</h1></div>
          <div id="price"> <h2>2 000 009 kr</h2></div>
          <p>Type: House</p>
          <p>Rooms: 2</p>
      </div>

      <div id="obj-collage">
      <article className="collage-design" id="img-collage-house">
        <section className="collage-design" id="img-container">
          <img id="img1" src={pic5} />
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

        <p id = "houseText">New opportunity, as we have another home in the area for sale, to
          acquire a well-equipped condominium on two floors in an attractive
          area. The home is bright and well-planned with a practical floor plan
          with hall, shower room with laundry area, kitchen and living room with
          open floor plan on the entrance level. <br/> <br/>The patio has a nice location
          facing south. On the upper level there is a living room with access to
          a balcony, three bedrooms and a bathroom. In the living room there is
          a hatch up to the attic. Heating is done with water-borne heat via
          exhaust air heat pump and there is access to both carport and charging
          box for the car. The home is located in a pleasant area with school,
          preschool, grocery store and with a short distance to city of
          Gothenburg.
          </p>
      </div>
    </div>
  );
};

export default HouseObject1;
