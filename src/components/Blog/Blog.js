import { useState } from "react";
import BlogContent from "../data/BlogContent";
import BlogList from "./BlogList";
import BlogLoggedIn from "./BlogLoggedIn";
import { useEffect } from "react";
import "../../stylesheets/Blog.css";
import img from "../Pictures/bg-image.jpg";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog";
    window.scrollTo(0, 0);
    document.getElementById("banner").style.backgroundImage = `url(${img})`;
  }, []);

  const [post, setPost] = useState(BlogContent);
  return (
    <div className="blog">
      <div id="blogLoggIn">
        <BlogLoggedIn />
      </div>
      <div id="blogTopTitle">
        <hr className="line"></hr>
        <h2 className="title">Blog</h2>
        <hr className="line"></hr>
      </div>
      <div id="blog-content">
        <BlogList post={post} />
      </div>
    </div>
  );
};

export default Blog;
