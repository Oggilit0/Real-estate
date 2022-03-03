import pic1 from "../Pictures/House/Apartment1/Apartment1-1.jpg";
import pic2 from "../Pictures/House/Apartment1/Apartment1-2.jpg";
import pic3 from "../Pictures/House/Apartment1/Apartment1-3.jpg";
import pic4 from "../Pictures/House/Apartment1/Apartment1-4.jpg";
import "../../stylesheets/HouseObject.css";
import Viewing from "../ReusableComponents/Viewing";
import { useEffect } from "react";

const HouseObject6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("banner").style.backgroundImage = `url(${pic2})`;
  }, []);

  return (
    <div className="houseObjectContainer">
      <Viewing date={"24 jun"} />
      <div id="obj-information">
          <div id="adress"><h1>Lindvägen 4</h1></div>
          <div id="price"> <h2>40 000 000kr</h2></div>
          <p>Type: Apartment</p>
          <p>Rooms: 3</p>
      </div>

      <div id="obj-collage">
      <article className="collage-design" id="img-collage-house">
        <section className="collage-design" id="img-container">
          <img id="img1" src={pic1} />
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
        Bright and fresh apartment of 120 sqm with open floor plan located at
          the top of the house!<br/><br/> The elevator takes you all the way down to the
          heated garage and basement storage that belongs to the apartment. The
          home has oak parquet floors in all rooms and white painted walls.
          <br/>Kitchen and dining area adjacent to the living room with access to the
          balcony. The bathroom is spacious with tiled walls, carpet on the
          floor and equipped with washer and dryer. Bedroom with storage in the
          form of closets.
        </p>
      </div>
    </div>
  );
};

export default HouseObject6;
