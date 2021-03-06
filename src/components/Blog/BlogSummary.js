import ReusableButton from "../ReusableComponents/ReusableButton";

const BlogSummary = ({item}) => {
  return (

    <div id = "blogSummary">
      <h1 id="blogTitle">{item.title}</h1>
      <p id="timeDatePost">Posted by {item.author} on {item.date}</p>
      <img id = "blogImage" src={item.image}/>
      <div id="previewText">{item.previewText}</div>
      <div id = "continue-btn">
      <ReusableButton onClick={(e) => {e.preventDefault(); window.location.href = `/blogpost${item.id}`;}}title="Continue reading"></ReusableButton>
      </div>
    </div>
  );
};

export default BlogSummary;