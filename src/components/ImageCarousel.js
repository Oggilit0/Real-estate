import Carousel from "react-elastic-carousel";
import discover from "./Pictures/pillow.jpg";
import "../stylesheets/ImageCarousel.css";
import Item from "./Item";
import { Link } from "react-router-dom";

const ImageCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 650, itemsToShow: 3 },
    { width: 850, itemsToShow: 4, itemsToScroll: 2 },
    { width: 900, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <>
      <div id="carousel-container">
        <Carousel
          breakPoints={breakPoints}
          //enableAutoPlay
          //autoPlaySpeed={5000}

          itemsToShow={8}
        >
          <Item>
            <Link to="/about">
              <img id="carousel-img" src={discover} />
              <div id="carousel-text"><p>asdasdasdasdasd</p></div>
            </Link>
          </Item>
          <Item>
            <img id="carousel-img" src={discover} />
            <div id="carousel-text"><p>asdasdasdasdasd</p></div>
          </Item>
          <Item>
            <img id="carousel-img" src={discover} />
            <div id="carousel-text"><p>asdasdasdasdasd</p></div>
          </Item>
          <Item>
            <img id="carousel-img" src={discover} />
            <div id="carousel-text"><p>asdasdasdasdasd</p></div>
          </Item>
          <Item>
            <img id="carousel-img" src={discover} />
            <div id="carousel-text"><p>asdasdasdasdasd</p></div>
          </Item>
          <Item>
            <img id="carousel-img" src={discover} />
            <div id="carousel-text"><p>asdasdasdasdasd</p></div>
          </Item>
          <Item>
            <img id="carousel-img" src={discover} />
            <div id="carousel-text"><p>asdasdasdasdasd</p></div>
          </Item>
          <Item>
            <img id="carousel-img" src={discover} />
            <div id="carousel-text"><p>asdasdasdasdasd</p></div>
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default ImageCarousel;
