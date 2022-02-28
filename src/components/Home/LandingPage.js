import ImageCarousel from "./ImageCarousel";
import { useEffect } from "react";
import Articles from "./Articles";
import Inspirational from "../ReusableComponents/Inspirational";
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
