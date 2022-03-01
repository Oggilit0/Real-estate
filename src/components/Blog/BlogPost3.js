import {useState} from "react";
import BlogContent from "../data/BlogContent";
import ReusableButton from "../ReusableComponents/ReusableButton";
import img3 from "../Pictures/house-for-sale.jpg";
import '../../stylesheets/BlogPost.css';


const BlogPost3 = (item) => {
  const [post, setPost] = useState(BlogContent);

  return (
    <div className="blogPost">
      <h2 id ="blogPostTitle">5 TIPS WHEN SELLING YOUR HOUSE</h2>
      <p>
      <p id="timeDatePostBlog">Posted by Adam Yarkoni on 10 May, 2021</p>
      </p>
      <img id="bloggImage" src={img3}></img>
      <p id = "blogPostText">Now is a great time to sell your home! 
      Home values are rising rapidly, and there is a shortage of 
      houses on the market. The five tips below will help you make 
      sure your house wins the bidding war. <br /> <br />1. Spring is the most popular
       time of year for people to start packing up their old home, and moving
        into a new one! everyone enjoys the promise of spring so much that they 
        left their old homes behind and go searching for a new one.<br /><br />  2. A 
        good way to attract buyers is by offering free online classes that
         provide tips and tricks on selling homes even faster.<br /> <br /> 3. You can reach
          more potential buyers by advertising in places such as Social Media, 
          TV, Radio and other public events.<br /><br />  4. You can get your money quicker 
          if you offer incentives to potential buyers such as better interest 
          rates or providing loans sooner than the bank would offer it to them 
          on their own.<br /><br />  5. Offering free upgrades on appliances like microwaves
           and dishwashers could be enough incentive for someone looking at
            multiple houses in an area where many other buyers look too. Its
             always important to make sure that you have given all possible customers 
             what they want</p>
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
      <ReusableButton title="Leave a reply"></ReusableButton>
    </div>
  );
};
export default BlogPost3;