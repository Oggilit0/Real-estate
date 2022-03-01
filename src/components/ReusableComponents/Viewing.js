import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Viewing = () => {
  return (
    <>
      <div>Next Showing:</div>

      <div className="showing">
        24 JUN 18:00
        <div>
          Share:
          <p />
          <a href="#">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </>
  );
};

export default Viewing;
