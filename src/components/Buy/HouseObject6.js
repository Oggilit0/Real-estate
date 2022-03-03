import pic1 from "../Pictures/House/House6/House6-1.jpg";
import pic2 from "../Pictures/House/House6/House6-2.jpg";
import pic3 from "../Pictures/House/House6/House6-3.jpg";
import pic4 from "../Pictures/House/House6/House6-4.jpg";
import pic5 from "../Pictures/House/House6/House6-5.jpg";
import "../../stylesheets/HouseObject.css";
import Viewing from "../ReusableComponents/Viewing";
import { useEffect } from "react";

const HouseObject6 = () => {
  useEffect(() => {
    document.getElementById("banner").style.backgroundImage = `url(${pic1})`;
  }, []);

  return (
    <div className="houseObjectContainer">
      <Viewing date={"24 jun"} />
      <div id="obj-information">
          <div id="adress"><h1>Prinsessgatan 1</h1></div>
          <div id="price"> <h2>8 000 000 kr</h2></div>
          <p>Type: House</p>
          <p>Rooms: 8</p>
      </div>

      <div id="obj-collage">
      <article className="collage-design" id="img-collage-house">
        <section className="collage-design" id="img-container">
          <img id="img1" src={pic3} />
        </section>

        <section className="collage-design" id="medium-img-container">
          <img id="medium-img-house" src={pic5} />
        </section>
        <section className="collage-design" id="broad-img-container">
          <img id="broad-img-house" src={pic2} />
        </section>
      </article>
      </div>

      

      <div id="description-bar">
        <hr className="line"></hr>
        <h2 className="title">Information</h2>
        <hr className="line"></hr>

        <p id="houseText">
          Here, the puzzle of life gets close in an attractive small town idyll
          with surroundings of forest and countryside. <br/><br/> In grown-up
          neighborhoods, you live on Prinsessgatan in an area without passage
          and close to forests and wonderful recreational areas. This property
          is well maintained and built in 1957. Well-planned area with basement
          and furnished upstairs that is framed by a neat garden that
          accommodates both nice sun locations and a place for those interested
          in cultivation. <br/> <br/>At the entrance side there is a driveway with a
          parking space and a stone walkway with a free-standing and practical
          storage room. The plot has a corner position, which gives an airy
          position with an open plot area that runs around the house with a
          well-kept hedge. Via nice terraces with flower beds and tiled surface,
          the entrance to the house is given. <br/><br/>There is a hall with access to a
          shower room and space for outerwear. To the right of the hall is
          reached one of the house's bedrooms which has plenty of space for a
          double bed. To the southwest runs a large terrace and patio which is
          reached via the generous and lovely living room with wonderful light
          flow.  <br/><br/>There is also a kitchen on the entrance level via both the
          living room and hall with nice light from two directions and a
          pleasant dining area. In the furnished attic, cozy rooms are offered
          in the form of two bedrooms and living rooms with plenty of storage in
          the walk-in closet. The basement has a spacious laundry room, living
          room and storage and hobby room. There is also a larger bathroom with
          a bath. <br/><br/>The area is a true family dream with idyllic neighborhoods
          that can be reached with a short drive, about 10 minutes.
        </p>
      </div>
    </div>
  );
};

export default HouseObject6;
