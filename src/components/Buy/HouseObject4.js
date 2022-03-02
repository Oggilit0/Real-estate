import pic1 from "../Pictures/House/House4/House4-1.jpg";
import pic2 from "../Pictures/House/House4/House4-2.jpg";
import pic3 from "../Pictures/House/House4/House4-3.jpg";
import pic4 from "../Pictures/House/House4/House4-4.jpg";
import pic5 from "../Pictures/House/House4/House4-5.jpg";
import "../../stylesheets/HouseObject.css";
import Viewing from "../ReusableComponents/Viewing";
import { useEffect } from "react";

const HouseObject4 = () => {
  useEffect(() => {
    document.getElementById("banner").style.backgroundImage = `url(${pic2})`;
  }, []);

  return (
    <div className="houseObjectContainer">
      <Viewing date={"24 jun"} />
      <div id="obj-information">
          <div id="adress"><h1>Udden 5</h1></div>
          <div id="price"> <h2>5 000 000 kr</h2></div>
          <p>Type: House</p>
          <p>Rooms: 4</p>
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
        A warm welcome to this late 30's villa located on Udden 5 in
          Valdemarsvik. <br/><br/>Here awaits a family-friendly villa spread over two
          floors.The floor plan is appealing where the kitchen and living room
          merge and in the living room there is a wood burning stove that
          creates an incredible feeling of coziness and is a fantastic heat
          source that heats up colder days. Cozy kitchen that was renovated in
          2017 and there is plenty of space for a dining table for nice family
          dinners.<br/>Upstairs we find the house's more private spaces with 3
          bedrooms and a hall with access to the lovely balcony for relaxation.
          Furthermore, we have a bathroom on the entrance level and a toilet on
          the upper level.<br/> Flat and easy-care garden plot with plenty of space
          for play, relaxation and cultivation opportunities if desired. <br/>Here
          you live in central Valdemarsvik with proximity to preschool, school,
          grocery store and sports facility. Welcome to register your interest!
        </p>
      </div>
    </div>
  );
};

export default HouseObject4;
