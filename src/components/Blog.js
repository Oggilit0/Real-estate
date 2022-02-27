import { useState } from "react";
import BlogContent from "./data/BlogContent";
import BlogList from "./BlogList";
import BlogLoggedIn from "./BlogLoggedIn";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog";
  }, []);

  const [post, setPost] = useState(BlogContent);
  return (
    <div className="blog">
      <div id = "blogLoggIn">
      <BlogLoggedIn/>
      </div>
      <BlogList post={post}/>
      
    </div>
  );
};

export default Blog;
