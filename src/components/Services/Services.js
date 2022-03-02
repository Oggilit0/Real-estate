import StyleLogo from "../Pictures/StyleLogo.png";
import InsuranceLogo from "../Pictures/InsuranceLogo.png";
import ValueLogo from "../Pictures/ValueLogo.png";
import CalenderLogo from "../Pictures/calenderLogo.png";
import CameraLogo from "../Pictures/cameraLogo.png";
import CalculatorLogo from "../Pictures/calculatorLogo.png";
import FamilyMoving from "../Pictures/StartPage/family-playing-box.jpg";
import customer from "../Pictures/customer-lady.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../stylesheets/Services.css";
import img from "../Pictures/bg-image.jpg";

const Services = () => {
  useEffect(() => {
    document.title = "Services";
    document.getElementById("banner").style.backgroundImage = `url(${img})`;
  }, []);
  return (
    <div className="services">
      <article>
        <hr className="line"></hr>
        <h2 className="title" id="serviceTopTitle">
          Our Services
        </h2>
        <hr className="line"></hr>
      </article>

      <article>
        <section className="landing-section">
          <div id="serviceLogos">
            <div id="articles-logo-container">
              <img id="logoDesign" src={StyleLogo} />
              <h1 id="serviceTitle">Home Styling</h1>
              <p id="service-text">
                Does your home need a makeover? Let our homestyling experts
                provide simple, practical advice to help you sell your home
                faster.
              </p>
              <div>
                <br />
                <Link className="readMoreLink" to="./services">
                  {" "}
                  Read More{" "}
                </Link>
              </div>
            </div>
            <div id="articles-logo-container">
              <img id="logoDesign" src={InsuranceLogo}></img>
              <h1 id="serviceTitle">Insurance</h1>
              <p id="service-text">
                Protect your home and belongings with a homeowners insurance
                policy from our agency. We provide resources to help you get
                your life back on track after an unfortunate accident.
              </p>
              <br />
              <Link className="readMoreLink" to="./services">
                {" "}
                Read More{" "}
              </Link>
            </div>
            <div id="articles-logo-container">
              <img id="logoDesign" src={ValueLogo}></img>
              <h1 id="serviceTitle">Valuation</h1>
              <p id="service-text">
                With several years of experience in the real estate sector, we
                are committed to providing the most accurate home valuation
                estimates in the industry.
              </p>
              <div>
                <br />
                <Link className="readMoreLink" to="./Services">
                  {" "}
                  Read More{" "}
                </Link>
              </div>
            </div>
            <div id="articles-logo-container">
              <img id="logoDesign" src={CameraLogo}></img>
              <h1 id="serviceTitle">Photography</h1>
              <p id="service-text">
                Our real estate company specializes in professional
                photographing of houses up for sale. We are able to apply our
                expertise in this field through a variety of services.
              </p>
              <div>
                <br />
                <Link className="readMoreLink" to="./Services">
                  {" "}
                  Read More{" "}
                </Link>
              </div>
            </div>
            <div id="articles-logo-container">
              <img id="logoDesign" src={CalenderLogo}></img>
              <h1 id="serviceTitle">Meet Us</h1>
              <p id="service-text">
                Wheter you are selling, buying or dreaming. Book an appointment
                with one of our Realtor. We look forward to seeing you soon!
              </p>
              <div>
                <br />
                <Link className="readMoreLink" to="./Services">
                  {" "}
                  Read More{" "}
                </Link>
              </div>
            </div>
            <div id="articles-logo-container">
              <img id="logoDesign" src={CalculatorLogo}></img>
              <h1 id="serviceTitle">House loan</h1>
              <p id="service-text">
                Calculate your mortgage, monthly payments, and more in just a
                few easy steps.
              </p>
              <div>
                <br />
                <Link className="readMoreLink" to="./Services">
                  {" "}
                  Read More{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      <article>
        <hr className="line"></hr>
        <h2 className="title">The voice of our customers</h2>
        <hr className="line"></hr>
        <section className="landing-customer">
          <img id="customerDesign" src={customer} />
          <h1 id="customerTitle">
            {" "}
            <br />I FOUND MY DREAM HOME
          </h1>
          <div id="customerText">
            '"This is the house I have been looking for since I could remember.
            I had my eyes on this home since last year, especially after seeing
            its beautiful kitchen and deck area. The staff was great and helped
            me through every part of the sale, from advising me on small details
            to big specifics. It is a very professional team, who not only value
            the clients' feedback, but also ensure that all problems are solved
            at first hand."' - Elsie
          </div>
        </section>
      </article>

      <article>
        <section className="landing-section">
          <img id="familyMoving" src={FamilyMoving} />
        </section>
      </article>
    </div>
  );
};

export default Services;
