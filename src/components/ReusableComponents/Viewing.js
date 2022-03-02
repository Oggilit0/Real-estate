import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../../stylesheets/Viewing.css";
import ReusableButton from "./ReusableButton";

const Viewing = (props) => {
  return (
    <>
      <div className="cForm">
        <div>
          <div>Next Showing:</div>
          {props.date}
          <div>
            Share:
            <p />
            <a href="#">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <h2 className="title" id="contactForm">
          Book Showing:
        </h2>
        <form className="form">
          <div className="form-controll">
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="form-controll">
            <input type="text" id="email" placeholder="Phone number" />
          </div>

          <ReusableButton title="Send"></ReusableButton>
        </form>
      </div>
    </>
  );
};

export default Viewing;
