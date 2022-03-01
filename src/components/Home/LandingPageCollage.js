import diningroom from "../Pictures/StartPage/dining-room-1.jpg";
import livingroom2 from "../Pictures/StartPage/living-room-2.jpg";
import livingroom from "../Pictures/StartPage/living-room-1.jpg";
import couple from "../Pictures/StartPage/couple-moving.jpg";
import '../../stylesheets/LandingPageCollage.css';


const LandingPageCollage = () => {
  return (
    <article className="landing-article" id="img-collage">
      <section className="landing-section" id="img-container-home">
        <img id="small-img1" src={livingroom2} />
        <p id = "collageText">
        Feel inspired by the latest project kick-offs, 
        including new ideas and designs for your next home.
        </p>
      </section>

      <section className="landing-section" id="img-container-home">
        <img id="small-img2" src={couple} />
        <p id = "collageText">
        If you are thinking about buying a home contact us! We would 
        love to help your dream come true!
        </p>
      </section>

      <section className="landing-section" id="medium-img-container">
        <img id="medium-img" src={livingroom} />
      </section>
      <section className="landing-section" id="broad-img-container">
        <img id="broad-img" src={diningroom} />
      </section>
    </article>
  );
};
export default LandingPageCollage;
