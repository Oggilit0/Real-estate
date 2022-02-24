import {useState} from "react";
import BlogContent from "./data/BlogContent";
import BlogList from "../components/BlogList";
import BlogLoggedIn from "./BlogLoggedIn";

const Blog = () => {
  const [post, setPost] = useState(BlogContent);
  return (
    <div className="blog">
      <BlogList post={post}/>
      
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
