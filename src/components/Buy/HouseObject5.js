import pic1 from "../Pictures/House/House5/House5-1.jpg";
import pic2 from "../Pictures/House/House5/House5-2.jpg";
import pic3 from "../Pictures/House/House5/House5-3.jpg";
import pic4 from "../Pictures/House/House5/House5-4.jpg";
import pic5 from "../Pictures/House/House5/House5-5.jpg";
import "../../stylesheets/HouseObject.css";

const HouseObject5 = () => {
  return (
    <div className="houseObjectContainer">
      <div className="factsTop">
        <hr className="line"></hr>
        <h2 className="title">Facts</h2>
        <hr className="line"></hr>
      </div>

      <div className="adressPrice">
        <div className="adress">Lidén 3</div>
        <div className="price"> 1000000 kr</div>
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
          <img id="img1" src={pic2} />
        </section>

        <section className="landing-section" id="medium-img-container">
          <img id="medium-img-house" src={pic3} />
        </section>
        <section className="landing-section" id="broad-img-container">
          <img id="broad-img-house" src={pic4} />
        </section>
      </article>

      <div className="description-bar">
        <hr className="line"></hr>
        <h2 className="title">Information</h2>
        <hr className="line"></hr>

        <p id="houseText">
          Move into this well-planned and well-maintained 1½ storey villa with
          basement and a good location in popular Bettna. The same family has
          lived and enjoyed here since the house was built in 2019, perfect for
          you who are looking for a little extra space. The villa's social areas
          are ample with space for both family and friends. The entrance floor
          houses a living room at an angle open to the dining room with access
          to the patio deck and the garden. Kitchen with dining area, bedroom
          and a guest toilet. The upper floor contains three bedrooms, a
          bathroom and a small extra room as an office. Basement throughout the
          house with large living room with space for both party and play,
          laundry sauna and storage. Garage with on site in front and proximity
          to guest parking. You are very welcome to register for the
          show!orhoods that can be reached with a short drive, about 10 minutes.
        </p>
      </div>
    </div>
  );
};

export default HouseObject5;
