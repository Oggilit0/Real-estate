import diningroom from "../Pictures/StartPage/dining-room-1.jpg";
import entrance from "../Pictures/StartPage/entrance-1.jpg";
import livingroom from "../Pictures/StartPage/living-room-1.jpg";
import bedroom from "../Pictures/StartPage/bedroom-1.jpg";

const LandingPageCollage = () => {
  return (
    <article className="landing-article" id="img-collage">
      <section className="landing-section" id="img-container">
        <img id="small-img1" src={bedroom} />
        <p id = "collageText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
          sodales magna. Duis tristique a augue ac hendrerit. Maecenas mollis,
          sapien quis sollicitudin convallis, ex diam posuere urna, in euismod
          magna lorem ut velit.
        </p>
      </section>

      <section className="landing-section" id="img-container">
        <img id="small-img2" src={entrance} />
        <p id = "collageText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
          sodales magna. Duis tristique a augue ac hendrerit. Maecenas mollis,
          sapien quis sollicitudin convallis, ex diam posuere urna, in euismod
          magna lorem ut velit.
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
