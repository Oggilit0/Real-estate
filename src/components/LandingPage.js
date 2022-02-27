import bedroom from "./Pictures/StartPage/bedroom-1.jpg";
import diningroom from "./Pictures/StartPage/dining-room-1.jpg";
import entrance from "./Pictures/StartPage/entrance-1.jpg";
import livingroom from "./Pictures/StartPage/living-room-1.jpg";
import discover from "./Pictures/family-photo-moving.jpg";
import ImageCarousel from "./ImageCarousel";
import { useEffect } from "react";
import Inspirational from "./Inspirational";
{
}

const LandingPage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="landing-page">
      <h2>Popular homes</h2>
      <article className="landing-article">
        <ImageCarousel />
      </article>

      <h2>From dream to reality</h2>
      <article className="landing-article" id="img-collage">
        <section className="landing-section" id="img-container">
          <img id="small-img1" src={bedroom} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
            sodales magna. Duis tristique a augue ac hendrerit. Maecenas mollis,
            sapien quis sollicitudin convallis, ex diam posuere urna, in euismod
            magna lorem ut velit.
          </p>
        </section>

        <section className="landing-section" id="img-container">
          <img id="small-img2" src={entrance} />
          <p>
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

      <h2>Discover how much your home is worth</h2>
      <article className="landing-article" id="landing-article">
        <section className="landing-section" id="discover">
          <Inspirational />
        </section>
      </article>
      <h2>Articles</h2>
      <article id="articles-container">
        <section id="articles-img-container">
          <img id="articles-img" src={bedroom}></img>
          <p>
            Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit in
            odio.
          </p>
        </section>
        <section id="articles-img-container">
          <img id="articles-img" src={bedroom}></img>
          <p>
            Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit in
            odio.
          </p>
        </section>
        <section id="articles-img-container">
          <img id="articles-img" src={bedroom}></img>
          <p>
            Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit in
            odio.
          </p>
        </section>
        <section id="articles-img-container">
          <img id="articles-img" src={bedroom}></img>
          <p>
            Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit in
            odio.
          </p>
        </section>
        <section id="articles-img-container">
          <img id="articles-img" src={bedroom}></img>
          <p>
            Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit in
            odio.
          </p>
        </section>
        <section id="articles-img-container">
          <img id="articles-img" src={bedroom}></img>
          <p>
            Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit in
            odio.
          </p>
        </section>
        <section id="articles-img-container">
          <img id="articles-img" src={bedroom}></img>
          <p>
            Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit in
            odio.
          </p>
        </section>
        <section id="articles-img-container">
          <img id="articles-img" src={bedroom}></img>
          <p>
            Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit in
            odio.
          </p>
        </section>
      </article>
    </div>
  );
};

export default LandingPage;
