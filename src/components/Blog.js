import picture from "../components/Pictures/real-estate-agent.jpg";
import BlogLoggedIn from "./BlogLoggedIn";

const Blog = () => {
  return (
    <div className="blog">
      <h2 id="title">ONCE UPON A REAL ESTATE AGENT</h2>
      <p id="datetime">2022-02-22/14:48/Mathilda Nilsson"</p>
      <img id="blogImage" src={picture} />
      <p id="text">
        My real estate journey have been interesting and exciting. I started
        here 4 years ago as a secretary for one of the biggest real estate
        agents in the city. That's not something I would like to do for the rest
        of my life, so after 3 years I was offered a chance to be an agent
        myself. I had already so many great experiences and have seen so much
        that I thought this is gonna be a whole new ball game for me..
      </p>
      <button
        id="continue-reading-btn"
        onClick={(event) => (window.location.href = "/BlogPost")}
      >
        Continue reading
      </button>
      <BlogLoggedIn />
    </div>
  );
};

export default Blog;
