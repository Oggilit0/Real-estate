import pic1 from "../Pictures/House/House4/House4-1.jpg";
import pic2 from "../Pictures/House/House4/House4-2.jpg";
import pic3 from "../Pictures/House/House4/House4-3.jpg";
import pic4 from "../Pictures/House/House4/House4-4.jpg";
import pic5 from "../Pictures/House/House4/House4-5.jpg";
import '../../stylesheets/HouseObject.css';

const HouseObject4 = () => {
  return (
    <div className="houseObjectContainer">
      <div className="factsTop">
        <hr className="line"></hr>
        <h2 className="title">Facts</h2>
        <hr className="line"></hr>
      </div>

      <div className="adressPrice">
        <div className="adress">Udden 5</div>
        <div className="price">5000000 kr</div>
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
        <img id="medium-img-house" src={pic2} />
      </section>
      <section className="landing-section" id="broad-img-container">
        <img id="broad-img-house" src={pic5} />
      </section>
    </article>

      <div className="description-bar">
      <hr className="line"></hr>
        <h2 className="title">Information</h2>
        <hr className="line"></hr>
        <p id = "houseText">
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
