import aboutPhoto from "../Pictures/about.jpg";
import { useEffect } from "react";
import '../../stylesheets/About.css';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="contact">
      <hr className="line"></hr>
      <h2 className="title">Yes we are real, Real Estate </h2>
      <hr className="line"></hr>

      <div className="aboutRL">
        Real Estate was founded in 1996 when co workers Louise Björnsson reached
        out to Guy Adams, the two of them met while working at a large real
        estate firm. but both had get tired of the stress in the workplace and
        that it was all about sales. They wanted to shift the focus to the most
        important aspect in real estate, the client, and that is you!
        <p />
        Louise and Guy works with three other agents, our door is always open
        for you, why don't come in for a chat over a cup of coffee? Besides
        offering good objects to match your dreams we have other services to
        help you on your quest, you can read more about that on our service
        page.
      </div>
      <div className="aboutHiring">
        We are always looking for new talents, please contact us if you are
        interested.
        <img id="aboutPhoto" src={aboutPhoto} />
      </div>
    </div>
  );
};

export default About;
