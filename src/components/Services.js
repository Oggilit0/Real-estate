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
  <div className="serviceLogos">
    <img id="logoDesign" src={StyleLogo} width="150px"/>
    <img id="logoDesign" src={InsuranceLogo} width="150px"/>
    <img id="logoDesign" src={ValueLogo} width="150px"/>
    </div>
    <div className="serviceLogos">
    <img id="logoDesign" src={CalenderLogo} width="150px"/>
    <img id="logoDesign" src={CameraLogo} width="150px"/>
    <img id="logoDesign" src={CalculatorLogo} width="150px"/>
  
    </div>

    <hr className = "line"></hr>
    <img id="familyMoving" src={FamilyMoving} width ="auto" height="500px"/>
    </div>
  );
};

export default Services;
