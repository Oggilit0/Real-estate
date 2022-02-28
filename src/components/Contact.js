import louise from "../components/Pictures/contact/louise.jpg";
import guy from "../components/Pictures/contact/guy.jpg";
import adam from "../components/Pictures/contact/adam.jpg";
import margret from "../components/Pictures/contact/margret.jpg";
import caroll from "../components/Pictures/contact/caroll.jpg";
import annika from "../components/Pictures/contact/annika.jpg";
import { useEffect } from "react";

const Contact = () => {

  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <div className="contact">

<div className="contactForm">
        <h2 className = "title" id="contactForm">Contact Form</h2>
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
        </form>
      </div>
      
      <hr className="line"></hr>
      <h2 className="title">Contact Us</h2>
      <hr className="line"></hr>

    
      <div id="articles-container">
        <div id="articles-img-container">
          <img id="articles-img" src={louise}></img>
          <p>Louise Yarkoni</p>
          <p>CEO and founder</p>
        </div>
        <div id="articles-img-container">
          <img id="articles-img" src={guy}></img>
          <p>Guy Adams</p>
          <p>Founder and KAM</p>
        </div>
        <div id="articles-img-container">
          <img id="articles-img" src={caroll}></img>
          <p>Caroll Adams</p>
          <p> Sales manager</p>
        </div>
        <div id="articles-img-container">
          <img id="articles-img" src={adam}></img>
          <p>Adam Yarkoni</p>
          <p>Sales executive</p>
        </div>
        <div id="articles-img-container">
          <img id="articles-img" src={margret}></img>
          <p>Margret Silverstein</p>
          <p>Sales executive</p>
        </div>
        <div id="articles-img-container">
          <img id="articles-img" src={annika}></img>
          <p>Annika Devald</p>
          <p>Reception</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
