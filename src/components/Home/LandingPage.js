import ImageCarousel from "./ImageCarousel";
import { useEffect } from "react";
import Articles from "./Articles";
import Inspirational from "../ReusableComponents/Inspirational";
import LandingPageCollage from "./LandingPageCollage";
import '../../stylesheets/LandingPage.css';
import img from "../Pictures/bg-image.jpg";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Home";
    document.getElementById("banner").style.backgroundImage = `url(${img})`;
  }, []);

  return (
    <div className="landing-page">
      <div id = "landingPageTitles">
      <hr className="line"></hr>
      <h2 className="title">Popular homes</h2>
      <hr className="line"></hr>
      </div>
      <article className="landing-article">
        <ImageCarousel />
      </article>


      <div id = "landingPageTitles">
      <hr className="line"></hr>
      <h2 className="title">From dream to reality</h2>
      <hr className="line"></hr>
      </div>
      <LandingPageCollage />
  

      <div id = "landingPageTitles">
      <hr className="line"></hr>
      <h2 className="title">Discover how much your home is worth</h2>
      <hr className="line"></hr>
      </div>

      <div >
        <Inspirational id ="inspirational-lander" />
      </div>
      <div id = "landingPageTitles">
      <hr className="line"></hr>
      <h2 className="title">Articles</h2>
      <hr className="line"></hr>
      </div>
        <Articles />
    </div>
  );
};

export default LandingPage;
