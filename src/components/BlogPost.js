import picture from "../components/Pictures/real-estate-agent.jpg";

const BlogPost = () => {
  const post = {
    blogTitle: "ONCE UPON A REAL ESTATE AGENT",
    blogDate: "2022-02-22",
    blogTime: "13:49",
    blogAuthor: "Mathilda Nilsson",
    blogText:
      "My real estate journey have been interesting and exciting. I started here 4 years ago as a secretary for one of the biggest real estate agents in the city. That's not something I would like to do for the rest of my life, so after 3 years I was offered a chance to be an agent myself. I had already so many great experiences and have seen so much that I thought this is gonna be a whole new ball game for me. 3 years later, it hasn't disappointed me once. My clients and I have become friends through this journey and some even became family. It gives me chills just thinking about all the amazing people i met during these past 6 years and all the people who are still to come. And when the day comes that I'm standing on top of it all, with my clients by my side and my kids playing around, i know this is going to be where i belong.'",
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