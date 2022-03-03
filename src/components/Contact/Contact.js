import louise from "../Pictures/contact/louise.jpg";
import guy from "../Pictures/contact/guy.jpg";
import adam from "../Pictures/contact/adam.jpg";
import margret from "../Pictures/contact/margret.jpg";
import caroll from "../Pictures/contact/caroll.jpg";
import annika from "../Pictures/contact/annika.jpg";
import laura from "../Pictures/contact/laura.jpg";
import miles from "../Pictures/contact/miles.jpg";
import { useEffect } from "react";
import ReusableButton from "../ReusableComponents/ReusableButton";
import "../../stylesheets/Contact.css";
import Career from "../Contact/Career";
import img from "../Pictures/bg-image.jpg";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
    window.scrollTo(0, 0);
    document.getElementById("banner").style.backgroundImage = `url(${img})`;
  }, []);

  return (
    <div className="contact">
      <div className="contactForm">
        <h2 className="title" id="contactForm">
          Contact Form
        </h2>
        <form className="form">
          <div className="form-controll">
            <input type="text" id="firstname" placeholder="Name" />
          </div>
          <div className="form-controll">
            <input type="text" id="email" placeholder="Email" />
          </div>
          <div className="form-controll">
            <textarea type="text" id="message" placeholder="Message" />
          </div>
          <ReusableButton title="Send"></ReusableButton>
        </form>
      </div>

      <div id="contactTopTitle">
        <hr className="line"></hr>
        <h2 className="title">Contact Us</h2>
        <hr className="line"></hr>
      </div>

      <div id="articles-container">
        <div id="articles-img-container">
          <img id="contact-img" src={louise}></img>
          <div id="contact-info">
            <p>Louise Yarkoni</p>
            <p>CEO and founder</p>
          </div>
        </div>
        <div id="articles-img-container">
          <img id="contact-img" src={guy}></img>
          <div id="contact-info">
            <p>Guy Adams</p>
            <p>Founder and KAM</p>
          </div>
        </div>
        <div id="articles-img-container">
          <img id="contact-img" src={laura}></img>
          <div id="contact-info">
            <p>Laura Carter</p>
            <p>HR manager</p>
          </div>
        </div>
        <div id="articles-img-container">
          <img id="contact-img" src={caroll}></img>
          <div id="contact-info">
            <p>Caroll Adams</p>
            <p> Sales manager</p>
          </div>
        </div>
        <div id="articles-img-container">
          <img id="contact-img" src={miles}></img>
          <div id="contact-info">
            <p>Miles Ray</p>
            <p>IT Engineer</p>
          </div>
        </div>
        <div id="articles-img-container">
          <img id="contact-img" src={adam}></img>
          <div id="contact-info">
            <p>Adam Yarkoni</p>
            <p>Sales executive</p>
          </div>
        </div>
        <div id="articles-img-container">
          <img id="contact-img" src={margret}></img>
          <div id="contact-info">
            <p>Margret Silverstein</p>
            <p>Sales executive</p>
          </div>
        </div>
        <div id="articles-img-container">
          <img id="contact-img" src={annika}></img>
          <div id="contact-info">
            <p>Annika Devald</p>
            <p>Reception</p>
          </div>
        </div>
      </div>

      <div id="careerTitle">
        <hr className="line"></hr>
        <h2 className="title">Career</h2>
        <hr className="line"></hr>
      </div>

      <Career />
    </div>
  );
};

export default Contact;
