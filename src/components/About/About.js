import aboutPhoto from "../Pictures/about.jpg";
import { useEffect } from "react";
import "../../stylesheets/About.css";
import Career from "../Contact/Career";
import img from "../Pictures/bg-image.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About";
    window.scrollTo(0, 0);
    document.getElementById("banner").style.backgroundImage = `url(${img})`;
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
        Louise and Guy works with 6 other talent, our door is always open for
        you, why don't come in for a chat over a cup of coffee? Besides offering
        good objects to match your dreams we have other services to help you on
        your quest, you can read more about that on our service page.
        <p />
      </div>
      <img id="aboutPhoto" src={aboutPhoto} />
      <p />
      <div className="aboutHiring">
        We look for talented people to join our team. Do you have what it takes?
        You can make an impact, develop relationships, and drive business
        forward. Our team's mission is to create a great experience for our
        client. You will be a part of our local world-class team that creates
        exceptional connection with cliens The ideal candidate is passionate
        about delivering world-class serivce, builds delightful client
        connections and is self-directed and adaptable to change. Read more and
        apply below!
        <p />
        <Career />
      </div>
    </div>
  );
};

export default About;
