import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../../stylesheets/Viewing.css";
import ReusableButton from "./ReusableButton";

const Viewing = (props) => {
  return (
    <>
      <div class="cForm">
        <div id="view-text">
          <div><p>Next Showing: {props.date}</p>
            <p>Share: <a id="" href="#" style={{color: "#1DA1F2"}}>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a></p>
            
          </div>
        </div>
        <h2 className="title" id="view-title">
          Book Showing:
        </h2>
        <form className="form">
          <div id="view-input" className="form-controll">
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div id="view-input" className="form-controll">
            <input type="text" id="email" placeholder="Phone number" />
          </div>
          <div id="view-btn">
            <ReusableButton title="Send"></ReusableButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default Viewing;
