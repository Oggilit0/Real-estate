import career from "../Pictures/contact/career-pic.jpg";
import onceUpon from "../Pictures/real-estate-blog-agent.jpg";
import tips from "../Pictures/house-for-sale.jpg";
import newYork from "../Pictures/new-york.jpg";
import about from "../Pictures/about.jpg";
import StyleLogo from "../Pictures/StyleLogo.png";
import ValueLogo from "../Pictures/ValueLogo.png";
import CalculatorLogo from "../Pictures/calculatorLogo.png";
import blog from "../Pictures/blogImage.jpg";
import { Link } from "react-router-dom";
import '../../stylesheets/Articles.css';

const Articles = () => {
  return (
    <article id="articles-container">
      <Link to="/blogpost1">
        <section id="articles-img-container">
          <img id="articles-img" src={onceUpon}></img>
          <h1>Once upon a real estate agent</h1>
          <p>My real estate journey have been interesting and exciting...</p>
          <p id = "explore">Explore</p>
        </section>
      </Link>
      <Link to="/blogpost3">
        <section id="articles-img-container">
          <img id="articles-img" src={tips}></img>
          <h1>5 Tips when selling your house</h1>
          <p>
            Now is a great time to sell your home! Home values are rising
            rapidly, and...
          </p>
          <p id = "explore">Explore</p>
        </section>
      </Link>
      <Link to="/blogpost2">
        <section id="articles-img-container">
          <img id="articles-img" src={newYork}></img>
          <h1>Upcoming in <br/>New York</h1>
          <p>
            We are excited to announce that New York is about to launch a new
            wave of listings..
          </p>
          <p id = "explore">Explore</p>
        </section>
      </Link>
      <Link to="/about">
        <section id="articles-img-container">
          <img id="articles-img" src={about}></img>
          <h1>We are Real Estate</h1>
          <p>
            Real Estate was founded in 1996 when co workers Louise Björnsson
            reached out to Guy Adams..
          </p>
          <p id = "explore">Explore</p>
        </section>
      </Link>
      <Link to="/services">
        <section id="articles-img-container">
          <img id="service-img" src={CalculatorLogo}></img>
          <h1>House loan</h1>
          <p>
            Calculate your mortgage, monthly payments, and more in just a few
            easy steps...
          </p>
          <p id = "explore">Explore</p>
        </section>
      </Link>
      <Link to="/services">
        <section id="articles-img-container">
          <img id="service-img" src={ValueLogo}></img>
          <h1>Valuation</h1>
          <p>
            With several years of experience in the real estate sector, we are
            committed to providing the most...
          </p>
          <p id = "explore">Explore</p>
        </section>
      </Link>
      <Link to="/about">
        <section id="articles-img-container">
          <img id="articles-img" src={career}></img>
          <h1>Open positions</h1>
          <p>
          Our company is growing quickly and we're looking for some new faces to join our team.
          </p>
          <p id = "explore">Explore</p>
        </section>
      </Link>
      <Link to="/blog">
        <section id="articles-img-container">
          <img id="articles-img" src={blog}></img>
          <h1>Visit our blog</h1>
          <p>
            Visit our beloved and well updated blog to get the latest information and inspiration.
          </p>
          <p id = "explore">Explore</p>
        </section>
      </Link>
    </article>
  );
};

export default Articles;
