import {useState} from "react";
import BlogContent from "../data/BlogContent";
import ReusableButton from "../ReusableComponents/ReusableButton";
import img2 from "../Pictures/new-york.jpg";
import '../../stylesheets/BlogPost.css';


const BlogPost2 = (item) => {
  const [post, setPost] = useState(BlogContent);

  return (
    <div className="blogPost">
      <h2 id ="blogPostTitle">UPCOMING LISTINGS IN NEW YORK</h2>
      <p>
      <p id="timeDatePostBlog">Posted by Stacey Wilson on 2 May, 2021</p>
      </p>
      <img id="bloggImage" src={img2}></img>
      <p id = "blogPostText">We are excited to announce that New York 
      is about to launch a new wave of listings. <br /> <br /> With great options in
       Brooklyn, Queens, Manhattan, and other areas all around New York City,
        we are confident that you will find the house of your dreams. <br /> <br /> New York,
         New York where once you come here, you’ll never want to leave! If you manage 
         to get over the winter weather we promise this amazing city has so much more 
         to offer, starting with the amazing real estate we have available in our
          upcoming sales!<br /> <br />  There are one bedrooms in Brooklyn and Queens, showing 
          their famous tree-lined streets and adorable brick storefronts. While 
          borough hopping why not check out the apartments in Manhattan?<br /> <br />  Don't
           forget to try the pizza...people take it very seriously around here. 
           It's life-changing.<br /> <br />  Also make sure to head to The Bronx for condos and 
           co-ops if you're still looking for your dream home – one of these could be it!<br /> <br /> 
            You can even make a whole weekend out of it by renting a beach house on Fire
             Island. Come find your best place yet!</p>
      <div className="replyForm">
        <div>
          <label id="reply">Leave a reply:</label>
        </div>
        <textarea id="replyBox"></textarea>
        <div>
          <label id="name">Name:</label>
        </div>
        <input id="nameBox"></input>
        <div>
          <label id="email">Email:</label>
        </div>
        <input id="emailBox"></input>
      </div>
      <div id="reply-btn">
      <ReusableButton title="Leave a reply"></ReusableButton>
      </div>
    </div>
  );
};
export default BlogPost2;