import bedroom from "../Pictures/StartPage/bedroom-1.jpg";
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
      <Link to="/">
        <section id="articles-img-container">
          <img id="articles-img" src={onceUpon}></img>
          <h1>Once upon a real estate agent</h1>
          <p>My real estate journey have been interesting and exciting...</p>
        </section>
      </Link>
      <Link to="/">
        <section id="articles-img-container">
          <img id="articles-img" src={tips}></img>
          <h1>5 Tips when selling your house</h1>
          <p>
            Now is a great time to sell your home! Home values are rising
            rapidly, and...
          </p>
        </section>
      </Link>
      <Link to="/">
        <section id="articles-img-container">
          <img id="articles-img" src={newYork}></img>
          <h1>Upcoming listings in New York</h1>
          <p>
            We are excited to announce that New York is about to launch a new
            wave of listings. With great...
          </p>
        </section>
      </Link>
      <Link to="/">
        <section id="articles-img-container">
          <img id="articles-img" src={about}></img>
          <h1>We are Real Estate</h1>
          <p>
            Real Estate was founded in 1996 when co workers Louise Björnsson
            reached out to Guy Adams, the two...
          </p>
        </section>
      </Link>
      <Link to="/">
        <section id="articles-img-container">
          <img id="articles-img" src={CalculatorLogo}></img>
          <h1>House loan</h1>
          <p>
            Calculate your mortgage, monthly payments, and more in just a few
            easy steps...
          </p>
        </section>
      </Link>
      <Link to="/">
        <section id="articles-img-container">
          <img id="articles-img" src={ValueLogo}></img>
          <h1>Valuation</h1>
          <p>
            With several years of experience in the real estate sector, we are
            committed to providing the most...
          </p>
        </section>
      </Link>
      <Link to="/">
        <section id="articles-img-container">
          <img id="articles-img" src={StyleLogo}></img>
          <h1>Home Styling</h1>
          <p>
            Does your home need a makeover? Let our homestyling experts provide
            simple, practical advice to help you...
          </p>
        </section>
      </Link>
      <Link to="/">
        <section id="articles-img-container">
          <img id="articles-img" src={blog}></img>
          <h1>Visit our blog</h1>
          <p>
            Visit our beloved and well updated blog!
          </p>
        </section>
      </Link>
    </article>
  );
};

export default Articles;
