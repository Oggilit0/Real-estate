import pic1 from "../Pictures/House/House6/House6-1.jpg";
import pic2 from "../Pictures/House/House6/House6-2.jpg";
import pic3 from "../Pictures/House/House6/House6-3.jpg";
import pic4 from "../Pictures/House/House6/House6-4.jpg";
import pic5 from "../Pictures/House/House6/House6-5.jpg";
import "../../stylesheets/HouseObject.css";

const HouseObject6 = () => {
  return (
    <div className="houseObjectContainer">
      <div className="factsTop">
        <hr className="line"></hr>
        <h2 className="title">Facts</h2>
        <hr className="line"></hr>
      </div>

      <div className="adressPrice">
        <div className="adress">Prinsessgatan 1</div>
        <div className="price"> 8000000 kr</div>
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
          Here, the puzzle of life gets close in an attractive small town idyll
          with surroundings of forest and countryside. In grown-up
          neighborhoods, you live on Prinsessgatan in an area without passage
          and close to forests and wonderful recreational areas. This property
          is well maintained and built in 1957. Well-planned area with basement
          and furnished upstairs that is framed by a neat garden that
          accommodates both nice sun locations and a place for those interested
          in cultivation. At the entrance side there is a driveway with a
          parking space and a stone walkway with a free-standing and practical
          storage room. The plot has a corner position, which gives an airy
          position with an open plot area that runs around the house with a
          well-kept hedge. Via nice terraces with flower beds and tiled surface,
          the entrance to the house is given. There is a hall with access to a
          shower room and space for outerwear. To the right of the hall is
          reached one of the house's bedrooms which has plenty of space for a
          double bed. To the southwest runs a large terrace and patio which is
          reached via the generous and lovely living room with wonderful light
          flow. There is also a kitchen on the entrance level via both the
          living room and hall with nice light from two directions and a
          pleasant dining area. In the furnished attic, cozy rooms are offered
          in the form of two bedrooms and living rooms with plenty of storage in
          the walk-in closet. The basement has a spacious laundry room, living
          room and storage and hobby room. There is also a larger bathroom with
          a bath. The area is a true family dream with idyllic neighborhoods
          that can be reached with a short drive, about 10 minutes.
        </p>
      </div>
    </div>
  );
};

export default HouseObject6;
