import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logga from "./Pictures/logga.png";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div id="footer-content">
        <h1>Take a moment to relax and enjoy life.</h1>
        <img id="footer-logo" src={logga} />
        <div id="social-media">
          <FontAwesomeIcon id="footer-icon" icon={faYoutube}></FontAwesomeIcon>
          <FontAwesomeIcon
            id="footer-icon"
            icon={faInstagram}
          ></FontAwesomeIcon>
          <FontAwesomeIcon id="footer-icon" icon={faLinkedin}></FontAwesomeIcon>
          <FontAwesomeIcon id="footer-icon" icon={faTwitter}></FontAwesomeIcon>
        </div>
        <div id="footer-line"></div>
        <p>
          As real estate brokers, our goal is to provide a personal service that
          makes everyone feel welcome. Our ambition is to create a natural
          meeting place where we can chat, laugh and imagine how your perfect
          home should look. We will talk about competition and
          market conditions when it is necessary, but mostly we will talk about
          what you are looking for in your dream home. The coffee is always hot in our office!
        </p>
      </div>
    </div>
  );
};

export default Footer;
