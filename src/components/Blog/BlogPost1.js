import {useState} from "react";
import BlogContent from "../data/BlogContent";
import ReusableButton from "../ReusableComponents/ReusableButton";
import img1 from "../Pictures/real-estate-blog-agent.jpg";
import '../../stylesheets/BlogPost.css';


const BlogPost1 = (item) => {
  const [post, setPost] = useState(BlogContent);

  return (
    <div className="blogPost">
      <h2 id ="blogPostTitle">ONCE UPON A REAL ESTATE AGENT</h2>
      <p>
      <p id="timeDatePostBlog">Posted by Laureen Goodere on 24 February, 2021</p>
      </p>
      <img id="bloggImage" src={img1}></img>
      <p id = "blogPostText">My real estate journey have been interesting and exciting. I started 
        here 4 years ago as a secretary for one of the biggest real estate 
        agents in the city. <br /><br />  That's not something I would like to do for the 
        rest of my life, so after 3 years I was offered a chance to be an agent
         myself. I had already so many great experiences and have seen so much that I
          thought this is gonna be a whole new ball game for me.<br /> <br />  3 years later, it hasn't 
          disappointed me once. My clients and I have become friends through this 
          journey and some even became family. It gives me chills just thinking about 
          all the amazing people i met during these past 6 years and all the people who 
          are still to come. <br /><br />  And when the day comes that I'm standing on top of it all, with
          my clients by my side and my kids playing around, i know this is going to be where i belong.'</p>
      <div className="replyForm">
        <div id = "replyInputs">
        <textarea id="replyBox" placeholder="Leave a reply"/>
        </div>
        <div id = "replyInputs">
        <input id="nameBox" placeholder="Name"/>
        </div>
        <div id = "replyInputs">
        <input id="emailBox" placeholder="Email"/>
      </div>
      <div id="reply-btn">
      <ReusableButton title="Leave a reply"></ReusableButton>
      </div>
    </div>
    </div>
  );
};
export default BlogPost1;