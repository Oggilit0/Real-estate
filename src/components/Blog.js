import {useState} from "react";
import BlogContent from "./data/BlogContent";
import BlogList from "./BlogList";
import BlogLoggedIn from "./BlogLoggedIn";

const Blog = () => {
  const [post, setPost] = useState(BlogContent);
  return (
    <div className="blog">
      <BlogList post={post}/>
      <div id = "blogLoggIn">
      <BlogLoggedIn/>
      </div>
    </div>
  );
};

export default Blog;
