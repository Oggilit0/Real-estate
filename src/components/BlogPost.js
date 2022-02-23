import picture from "../components/Pictures/real-estate-agent.jpg";

const BlogPost = () => {

  const post = {
    blogTitle: "ONCE UPON A REAL ESTATE AGENT",
    blogDate:"2022-02-22",
    blogTime:"13:49",
    blogAuthor:"Mathilda Nilsson",
    blogText:"We know that there are a lot of items to choose from with your home search, so we offer up-to-date listings from many different realtors. That way, we can show you homes for sale in the neighborhood you love, in fact, homes that you haven't even considered yet. We'll let you know about them -- before they show up on the market! It's like becoming an expert on real estate about houses and neighborhoods before you ever see them for sale!"
  }

  return ( 
    <div className="blogPost">
  <h2>{post.blogTitle}</h2>
  <p>{post.blogDate}/{post.blogTime}/{post.blogAuthor}</p>
  <img id="bloggImage" src={picture}></img>
  <p>{post.blogText}</p>
  <div className = "replyForm">
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
    <input id="emailBox" multiline={true} ></input>
    </div>
    <button id="btn-reply-send">Send</button>
  </div>
  );
};
export default BlogPost;
