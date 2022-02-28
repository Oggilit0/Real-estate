const HouseObject1 = () => {
  return (
    <div className="houseObjectContainer">
      <div className="factsTop">
        <hr className="line"></hr>
        <h2 className="title">Facts</h2>
        <hr className="line"></hr>
      </div>

      <div className="adressPrice">
        <div className="adress">Ödåkra 5</div>
        <div className="price">2000009kr</div>
      </div>

      <div className="pictures-bar">
        <hr className="line"></hr>
      </div>

      <div className="display">
        <img src={pic1} className="image" />
        <img src={pic2} className="image" />
        <img src={pic3} className="image" />
        <img src={pic4} className="image" />
      </div>

      <div className="description-bar">
        <hr className="line"></hr>
        <h4>
          Welcome to Ödåkra 5! <p /> This house is just an hour drive from the
          city centre of Gothenburg. It has two floors and 70 square meters of
          space, the house has two bedrooms, and three toilets. A big kitchen
          its a must when living in a house with this caliber. And just outside
          is the luxury pool where you can relax after a hard days work. Welcome
          to book a viewing!
        </h4>
      </div>
    </div>
  );
};
export default HouseObject1;
