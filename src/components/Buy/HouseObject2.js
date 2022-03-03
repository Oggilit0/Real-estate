import pic1 from "../Pictures/House/House2/House2-1.jpg";
import pic2 from "../Pictures/House/House2/House2-2.jpg";
import pic3 from "../Pictures/House/House2/House2-3.jpg";
import pic4 from "../Pictures/House/House2/House2-4.jpg";
import pic5 from "../Pictures/House/House2/House2-5.jpg";
import "../../stylesheets/HouseObject.css";
import Viewing from "../ReusableComponents/Viewing";
import { useEffect } from "react";

const HouseObject2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("banner").style.backgroundImage = `url(${pic5})`;
  }, []);

  return (
    <div className="houseObjectContainer">
      <Viewing date={"24 jun"} />
      <div id="obj-information">
          <div id="adress"><h1>Main Street 5</h1></div>
          <div id="price"> <h2>3 000 000 kr</h2></div>
          <p>Type: House</p>
          <p>Rooms: 3</p>
      </div>

      <div id="obj-collage">
      <article className="collage-design" id="img-collage-house">
        <section className="collage-design" id="img-container">
          <img id="img1" src={pic1} />
        </section>

        <section className="collage-design" id="medium-img-container">
          <img id="medium-img-house" src={pic2} />
        </section>
        <section className="collage-design" id="broad-img-container">
          <img id="broad-img-house" src={pic3} />
        </section>
      </article>
      </div>

      

      <div id="description-bar">
        <hr className="line"></hr>
        <h2 className="title">Information</h2>
        <hr className="line"></hr>

        <p id="houseText">
        Two-storey villa with basement, located in a popular residential area
          with a spacious plot of about 80 sqm. From the house you can easily
          reach Kinna center, school / care and bus stop. <br/><br/> The standard is new
          and fresh and in no need of renovation, which gives new owners the
          opportunity to have a piece of mind. Detached garage building and
          storage shed on the plot. The house has been inspected and minutes are
          available on the broker's website under the tab "documents and links".
          The property is sold with a disclaimer against any. hidden errors due
          to estate sales.<br/><br/> Welcome with your registration for the show.
        </p>
      </div>
    </div>
  );
};

export default HouseObject2;
