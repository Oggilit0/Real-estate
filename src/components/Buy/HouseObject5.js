import pic1 from "../Pictures/House/House5/House5-1.jpg";
import pic2 from "../Pictures/House/House5/House5-2.jpg";
import pic3 from "../Pictures/House/House5/House5-3.jpg";
import pic4 from "../Pictures/House/House5/House5-4.jpg";
import pic5 from "../Pictures/House/House5/House5-5.jpg";
import "../../stylesheets/HouseObject.css";
import Viewing from "../ReusableComponents/Viewing";
import { useEffect } from "react";

const HouseObject5 = () => {
  useEffect(() => {
    document.getElementById("banner").style.backgroundImage = `url(${pic2})`;
  }, []);

  return (
    <div className="houseObjectContainer">
      <Viewing date={"24 jun"} />
      <div id="obj-information">
          <div id="adress"><h1>Lidén 3</h1></div>
          <div id="price"> <h2>1 000 000 kr</h2></div>
          <p>Type: House</p>
          <p>Rooms: 3</p>
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
        Move into this well-planned and well-maintained 1½ storey villa with
          basement and a good location in popular Bettna. <br/> The same family has
          lived and enjoyed here since the house was built in 2019, perfect for
          you who are looking for a little extra space. <br/> <br/>The villa's social areas
          are ample with space for both family and friends. The entrance floor
          houses a living room at an angle open to the dining room with access
          to the patio deck and the garden. Kitchen with dining area, bedroom
          and a guest toilet. The upper floor contains three bedrooms, a
          bathroom and a small extra room as an office. Basement throughout the
          house with large living room with space for both party and play,
          laundry sauna and storage. Garage with on site in front and proximity
          to guest parking. <br/> <br/>You are very welcome to register for the
          show!orhoods that can be reached with a short drive, about 10 minutes.
        </p>
      </div>
    </div>
  );
};

export default HouseObject5;
