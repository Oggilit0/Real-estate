import louise from "../components/Pictures/contact/louise.jpg";
import guy from "../components/Pictures/contact/guy.jpg";
import chris from "../components/Pictures/contact/chris.jpg";
import adam from "../components/Pictures/contact/adam.jpg";
const Contact = () => {
  return (
    <div className="contact">
      <hr className="line"></hr>
      <h2 className="title">Contact Us</h2>
      <hr className="line"></hr>

      <div id="articles-container">
        <div id="articles-img-container">
          <img id="articles-img" src={louise}></img>
          <p>Louise Björnsson</p>
          <p>CEO and founder</p>
        </div>
        <div id="articles-img-container">
          <img id="articles-img" src={guy}></img>
          <p>Guy Adams</p>
          <p>Founder and KAM</p>
        </div>
        <div id="articles-img-container">
          <img id="articles-img" src={chris}></img>
          <p>Chris Adams, sales manager</p>
          <p>Sales manager</p>
        </div>
        <div id="articles-img-container">
          <img id="articles-img" src={adam}></img>
          <p>Adam Björnsson</p>
          <p>Sales executive</p>
        </div>

        <div className="contactForm">
          <h2 id="contactForm">Contact Form</h2>
          <form className="form">
            <div className="form-controll">
              <input type="text" id="firstname" placeholder="Name" />
            </div>
            <div className="form-controll">
              <input type="text" id="email" placeholder="Email" />
            </div>
            <div className="form-controll">
              <input type="text" id="message" placeholder="Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
