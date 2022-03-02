import pic1 from "../Pictures/House/Apartment1/Apartment1-1.jpg";
import pic2 from "../Pictures/House/Apartment1/Apartment1-2.jpg";
import pic3 from "../Pictures/House/Apartment1/Apartment1-3.jpg";
import pic4 from "../Pictures/House/Apartment1/Apartment1-4.jpg";
import "../../stylesheets/HouseObject.css";

const HouseObject8 = () => {
  return (
    <div className="houseObjectContainer">
      <div className="factsTop">
        <hr className="line"></hr>
        <h2 className="title">Facts</h2>
        <hr className="line"></hr>
      </div>

      <div className="adressPrice">
        <div className="adress">Lindvägen 4</div>
        <div className="price"> 40000000kr</div>
        <hr className="factsLine"></hr>
      </div>

      <div className="typeRooms">
        <div className="adress">Apartment</div>
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
          Bright and fresh apartment of 120 sqm with open floor plan located at
          the top of the house! The elevator takes you all the way down to the
          heated garage and basement storage that belongs to the apartment. The
          home has oak parquet floors in all rooms and white painted walls.
          Kitchen and dining area adjacent to the living room with access to the
          balcony. The bathroom is spacious with tiled walls, carpet on the
          floor and equipped with washer and dryer. Bedroom with storage in the
          form of closets.
        </p>
      </div>
    </div>
  );
};

export default HouseObject8;
