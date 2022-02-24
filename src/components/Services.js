import "../stylesheets/Services.css";
import StyleLogo from "./Pictures/StyleLogo.png";
import InsuranceLogo from "./Pictures/InsuranceLogo.png";
import ValueLogo from "./Pictures/ValueLogo.png";
import CalenderLogo from "./Pictures/calenderLogo.png";
import CameraLogo from "./Pictures/cameraLogo.png";
import CalculatorLogo from "./Pictures/calculatorLogo.png";
import FamilyMoving from "./Pictures/family-photo-moving.jpg";

const Services = () => {
  return (
    <div className="services">
      <hr className = "line"></hr>
      <h2 className ="title">Our Services</h2>
     <hr className = "line"></hr>
     <article>
        <div id="serviceLogos">
          <div id="articles-logo-container">
            <img id ="logoDesign" src={StyleLogo}></img>
            <h1 id="serviceTitle">Home Styling</h1>
            <p>
            Does your home need a makeover? 
            Let our homestyling experts provide simple, 
            practical advice to help you sell your home faster. 
            Our homestyling services provide valuable insight into 
            how to best showcase your homes key features, creating a 
            more positive first impression for potential buyers.
            </p>
          </div>
          <div id="articles-logo-container">
            <img id ="logoDesign" src={InsuranceLogo}></img>
            <h1 id="serviceTitle">Home Insurance</h1>
            <p>
            Protect your home and belongings with a homeowners insurance policy from our agency. 
            Whether you need flood or fire damage repairs, we provide resources to you and help 
            you get your life back on track after an unfortunate accident.
            </p>
          </div>
          <div id="articles-logo-container">
            <img id ="logoDesign" src={ValueLogo}></img>
            <h1 id="serviceTitle">Valuation</h1>
            <p>
            With several years of experience in the real estate sector, 
            we are committed to providing the most accurate home valuation estimates 
            in the industry. We gather comparable data from nearby houses, look at recent
             sales data and factors influencing property value growth to give you a price that you can trust.
            </p>
          </div>
          <div id="articles-logo-container">
            <img id ="logoDesign" src={CameraLogo}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
          <div id="articles-logo-container">
            <img id ="logoDesign" src={CalenderLogo}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
          <div id="articles-logo-container">
            <img id ="logoDesign" src={CalculatorLogo}></img>
            <p>
              Suspendisse eros tellus, euismod sit amet tincidunt ac, suscipit
              in odio.
            </p>
          </div>
        </div>
      </article>

     <hr className = "line"></hr>
     <img id="familyMoving" src={FamilyMoving} width ="auto" height="500px"/>
     
     
     </div>
  );
};

export default Services;
