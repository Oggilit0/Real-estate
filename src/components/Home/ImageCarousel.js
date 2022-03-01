import Carousel from "react-elastic-carousel";
import discover from "../Pictures/pillow.jpg";
import house2 from "../Pictures/House/House2/House2-3.jpg";
import house3 from "../Pictures/House/House3/House3-4.jpg";
import house4 from "../Pictures/House/House4/House4-5.jpg";
import house5 from "../Pictures/House/House5/House5-1.jpg";
import house6 from "../Pictures/House/House6/House6-1.jpg";
import house7 from "../Pictures/House/House7/House7-1.jpg";
import house8 from "../Pictures/House/Extras/House8-1.jpg";
import house9 from "../Pictures/House/Extras/House9-1.jpg";
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
              <img id="carousel-img" src={house5} />
            </Link>
          </Item>
          <Item>
            <Link to="/about">
            <img id="carousel-img" src={house7} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={house8} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={house2} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={house3} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={house4} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={house6} />
            </Link>
          </Item>
          <Item>
          <Link to="/about">
            <img id="carousel-img" src={house9} />
            </Link>
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default ImageCarousel;
