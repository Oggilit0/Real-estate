import discover from "../Pictures/family-photo-moving.jpg";
import ReusableButton from "./ReusableButton";
import '../../stylesheets/Inspirational.css';

const Inspirational = () => {
  return (
    <section id="discover">
      <img id="discover-img" src={discover} />
      <div id="discover-text">
        <h1 id="discoverText">Try out our free home value estimator!</h1>
        <p id="discoverText">
          Discover the current market value of your home with a free, instant
          property valuation report from home evaluator. There's no hidden fees
          or charges - we'll collate all the latest data and email you your
          report within just a few minutes.
        </p>
        <ReusableButton title="Try it out now!" color ="var(--Dark-shades)"></ReusableButton>
      </div>
    </section>
  );
};

export default Inspirational;
