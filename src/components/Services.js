import "../stylesheets/Services.css";
import StyleLogo from "./Pictures/StyleLogo.png";
import InsuranceLogo from "./Pictures/InsuranceLogo.png";
import ValueLogo from "./Pictures/ValueLogo.png";
import CalenderLogo from "./Pictures/calenderLogo.png";
import CameraLogo from "./Pictures/cameraLogo.png";
import CalculatorLogo from "./Pictures/calculatorLogo.png";
import FamilyMoving from "./Pictures/family-photo-moving.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
     <article>
      <hr className = "line"></hr>
      <h2 className ="title">Our Services</h2>
     <hr className = "line"></hr>
     </article>

     <article>
        <div id="serviceLogos">
          <div id="articles-logo-container">
            <img id ="logoDesign" src={StyleLogo}></img>
            <h1 id="serviceTitle">Home Styling</h1>
            <p id="service-text">
            Does your home need a makeover? 
            Let our homestyling experts provide simple, 
            practical advice to help you sell your home faster. 
            <div>
            <Link to="./services"> Read More </Link>
            </div>
            </p>
          </div>
          <div id="articles-logo-container">
            <img id ="logoDesign" src={InsuranceLogo}></img>
            <h1 id="serviceTitle">Home Insurance</h1>
            <p id="service-text">
            Protect your home and belongings with a homeowners insurance policy from our agency. 
            We provide resources to help you get your life back on track after an unfortunate accident.
            <div>
            <Link to="./services"> Read More </Link>
            </div>
            </p>
          </div>
          <div id="articles-logo-container">
            <img id ="logoDesign" src={ValueLogo}></img>
            <h1 id="serviceTitle">Valuation</h1>
            <p id="service-text">
            With several years of experience in the real estate sector, 
            we are committed to providing the most accurate home valuation estimates 
            in the industry.
            </p>
            <div>
            <Link to="./Services"> Read More </Link>
            </div>
          </div>
          <div id="articles-logo-container">
            <img id ="logoDesign" src={CameraLogo}></img>
            <h1 id="serviceTitle">Photography</h1>
            <p id="service-text">
            Our real estate company specializes in professional photographing of houses up for sale.
             We are able to apply our expertise in this field through a variety of services.
            </p>
            <div>
            <Link to="./Services"> Read More </Link>
            </div>
          </div>
          <div id="articles-logo-container">
            <img id ="logoDesign" src={CalenderLogo}></img>
            <h1 id="serviceTitle">Meet Us</h1>
            <p id="service-text">
            Wheter you are selling, buying or dreaming.
            Book an appointment with one of our Realtor. We look forward to seeing you soon!
            </p>
            <div>
            <Link to="./Services"> Read More </Link>
            </div>
          </div>
          <div id="articles-logo-container">
            <img id ="logoDesign" src={CalculatorLogo}></img>
            <h1 id="serviceTitle">House loan</h1>
            <p id="service-text">
            Calculate your mortgage, monthly payments, and more in just a few easy steps. 
            </p>
            <div>
            <Link to="./Services"> Read More </Link>
            </div>
          </div>
        </div>
      </article>
      
      <article>
     <hr className = "line"></hr>
     <img id="familyMoving" src={FamilyMoving} width ="auto" height="500px"/>
     </article>
     
     </div>
  );
};

export default Services;
