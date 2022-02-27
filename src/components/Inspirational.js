import discover from "./Pictures/family-photo-moving.jpg";

const Inspirational = (props) => {
  return (
    <>
      <img id="discover-img" src={discover} />
      <div id="discover-text">
        <h1>Try out our free home value estimator!</h1>
        <p>
          Discover the current market value of your home with a free, instant
          property valuation report from home evaluator. There's no hidden fees
          or charges - we'll collate all the latest data and email you your
          report within just a few minutes.
        </p>
        <button>Try it out now!</button>
      </div>
    </>
  );
};

export default Inspirational;
