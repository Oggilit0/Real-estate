import picture from "../components/Pictures/real-estate-agent.jpg";

const BlogPost = () => {
  const post = {
    blogTitle: "",
    blogDate: "",
    blogTime: "",
    blogAuthor: "",
    blogText:"",
      
  };

  return (
    <div className="blogPost">
      <h2>{post.blogTitle}</h2>
      <p>
        {post.blogDate}/{post.blogTime}/{post.blogAuthor}
      </p>
      <img id="bloggImage" src={picture}></img>
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