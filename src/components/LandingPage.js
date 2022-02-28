import bedroom from "./Pictures/StartPage/bedroom-1.jpg";
import diningroom from "./Pictures/StartPage/dining-room-1.jpg";
import entrance from "./Pictures/StartPage/entrance-1.jpg";
import livingroom from "./Pictures/StartPage/living-room-1.jpg";
import discover from "./Pictures/family-photo-moving.jpg";
import ImageCarousel from "./ImageCarousel";
import { useEffect } from "react";
import Articles from "./Articles";
import Inspirational from "./Inspirational";
import LandingPageCollage from "./LandingPageCollage";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="landing-page">
      <h2 className = "title">Popular homes</h2>
      <article className="landing-article">
        <ImageCarousel />
      </article>

      <h2 className = "title">From dream to reality</h2>
      <LandingPageCollage />
  

      <h2 className = "title">Discover how much your home is worth</h2>

      <Inspirational />

      <h2 className = "title">Articles</h2>
        <Articles />
    </div>
  );
};

export default LandingPage;
