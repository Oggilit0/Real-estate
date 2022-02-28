import Carousel from "react-elastic-carousel";
import discover from "../Pictures/pillow.jpg";
import Item from "./Item";
import { Link } from "react-router-dom";

const ImageCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 650, itemsToShow: 3 },
    { width: 850, itemsToShow: 4, itemsToScroll: 2 },
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
            </Link>
          </Item>
          <Item>
            <Link to="/about">
            <img id="carousel-img" src={discover} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={discover} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={discover} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={discover} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={discover} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={discover} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={discover} />
            </Link>
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default ImageCarousel;
