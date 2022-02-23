import bedroom from "./Pictures/StartPage/bedroom-1.jpg";
import diningroom from "./Pictures/StartPage/dining-room-1.jpg";
import entrance from "./Pictures/StartPage/entrance-1.jpg";
import livingroom from "./Pictures/StartPage/living-room-1.jpg";
import discover from "./Pictures/family-photo-moving.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2>Popular homes</h2>
      <article></article>
      <h2>From dream to reality</h2>
      <article id="img-collage">
        <div id="img-container">
          <img id="small-img1" src={bedroom} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
            sodales magna. Duis tristique a augue ac hendrerit. Maecenas mollis,
            sapien quis sollicitudin convallis, ex diam posuere urna, in euismod
            magna lorem ut velit.
          </p>
        </div>

        <div id="img-container">
          <img id="small-img2" src={entrance} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
            sodales magna. Duis tristique a augue ac hendrerit. Maecenas mollis,
            sapien quis sollicitudin convallis, ex diam posuere urna, in euismod
            magna lorem ut velit.
          </p>
        </div>

        <img id="medium-img" src={livingroom} />
        <img id="broad-img" src={diningroom} />
      </article>
      <h2>Discover how much your home is worth</h2>
      <article>
        <div id="discover">
          <img id="discover-img" src={discover} />
          <div id="discover-text">
            <h1>Try out our free home value estimator!</h1>
            <p>
              Discover the current market value of your home with a free,
              instant property valuation report from home evaluator. There's no
              hidden fees or charges - we'll collate all the latest data and
              email you your report within just a few minutes.
            </p>
            <button>Try it out now!</button>
          </div>
        </div>
      </article>
      <h2>Articles</h2>
      <article>
        <div id="articles-container">
          <div id="articles-img-container">
            <img id ="articles-img" src={bedroom}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
          <div id="articles-img-container">
            <img id ="articles-img" src={bedroom}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
          <div id="articles-img-container">
            <img id ="articles-img" src={bedroom}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
          <div id="articles-img-container">
            <img id ="articles-img" src={bedroom}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
          <div id="articles-img-container">
            <img id ="articles-img" src={bedroom}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
          <div id="articles-img-container">
            <img id ="articles-img" src={bedroom}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
          <div id="articles-img-container">
            <img id ="articles-img" src={bedroom}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
          <div id="articles-img-container">
            <img id ="articles-img" src={bedroom}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LandingPage;
