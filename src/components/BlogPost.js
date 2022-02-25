import {useState} from "react";
import BlogContent from "./data/BlogContent";


const BlogPost = () => {
  const [post, setPost] = useState(BlogContent);

  return (
    <div className="blogPost">
      <h2>{post.blogTitle}</h2>
      <p>
        {post.blogDate}/{post.blogTime}/{post.blogAuthor}
      </p>
      <img id="bloggImage" src={post.image}></img>
      <p>{post.blogText}</p>
      <div className="replyForm">
        <div>
          <label id="reply">Leave a reply:</label>
        </div>
        <input id="replyBox"></input>
        <div>
          <label id="name">Name:</label>
        </div>
        <input id="nameBox"></input>
        <div>
          <label id="email">Email:</label>
        </div>
        <input id="emailBox"></input>
      </div>
      <button id="btn-reply-send">Send</button>
    </div>
  );
};
export default BlogPost;