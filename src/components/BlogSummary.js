import { isContentEditable } from "@testing-library/user-event/dist/utils";

const BlogSummary = ({item}) => {
  return (
    <div id = "blogSummary">
      <h1 id="blogTitle">{item.title}</h1>
      <p id="timeDatePost">{item.date}/{item.time}/{item.author}</p>
      <img id = "blogImage" src={item.image}/>
      <div id="previewText">{item.previewText}</div>
      <button
        id="continue-reading-btn"
        onClick={(event) => (window.location.href = "/BlogPost")}
      >
        Continue reading
      </button>
      <hr></hr>
      
    </div>
  );
};

export default BlogSummary;