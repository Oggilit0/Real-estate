import { isContentEditable } from "@testing-library/user-event/dist/utils";
import ReusableButton from "../ReusableComponents/ReusableButton";

const BlogSummary = ({item}) => {
  return (
    <div id = "blogSummary">
      <h1 id="blogTitle">{item.title}</h1>
      <p id="timeDatePost">Posted by {item.author} on {item.date}</p>
      <img id = "blogImage" src={item.image}/>
      <div id="previewText">{item.previewText}</div>
      <ReusableButton onClick={(event) => (window.location.href = "/BlogPost")}title="Continue reading"></ReusableButton>
      <hr></hr>
      
    </div>
  );
};

export default BlogSummary;